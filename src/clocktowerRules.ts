import { RoleName, GameRules, Player } from "@knigam/role-player";
import { shuffle } from "./helper";

const MIN_PLAYERS = 6;
const MAX_PLAYERS = 16;

const STORYTELLER = "Storyteller";

// Townsfolk
const WASHERWOMAN = "Washerwoman";
const LIBRARIAN = "Librarian";
const INVESTIGATOR = "Investigator";
const CHEF = "Chef";
const EMPATH = "Empath";
const FORTUNE_TELLER = "Fortune Teller";
const UNDERTAKER = "Undertaker";
const MONK = "Monk";
const RAVENKEEPER = "Ravenkeeper";
const VIRGIN = "Virgin";
const SLAYER = "Slayer";
const SOLDIER = "Soldier";
const MAYOR = "Mayor";

// Outsiders
const BUTLER = "Butler";
const DRUNK = "Drunk";
const RECLUSE = "Recluse";
const SAINT = "Saint";
const outsiderRoles = new Set([BUTLER, DRUNK, RECLUSE, SAINT])

// Minions
const POISONER = "Poisoner";
const SPY = "Spy";
const SCARLET_WOMAN = "Scarlet Woman";
const BARON = "Baron";
const minionRoles = new Set([POISONER, SPY, SCARLET_WOMAN, BARON])

// Demons
const IMP = "Imp";
const demonRoles = new Set([IMP])

const validRoles = new Set([
  WASHERWOMAN,
  LIBRARIAN,
  INVESTIGATOR,
  CHEF,
  EMPATH,
  FORTUNE_TELLER,
  UNDERTAKER,
  MONK,
  RAVENKEEPER,
  VIRGIN,
  SLAYER,
  SOLDIER,
  MAYOR,
  BUTLER,
  RECLUSE,
  SAINT,
  POISONER,
  SPY,
  SCARLET_WOMAN,
  BARON,
  IMP,
]);

function assignRoles(players: Player[], roles: RoleName[]): Player[] {
  // check counts
  const numDemonRoles = roles.filter((r) => demonRoles.has(r)).length;
  if (numDemonRoles != 1) {
    throw new Error("The game needs a demon!")
  }
  const numMinionRoles = roles.filter((r) => minionRoles.has(r)).length;
  if (numMinionRoles != expectedMinionCount(players.length - 1)) {
    throw new Error("The game needs " + expectedMinionCount(players.length - 1) + " minions!")
  }
  const numOutsiderRoles = roles.filter((r) => outsiderRoles.has(r)).length;
  const expectedOutsiderCountForPlayers = expectedOutsiderCount(players.length - 1, roles)
  // allow for one less outsider than expected because that means a townsfolk is drunk
  if (numOutsiderRoles != expectedOutsiderCountForPlayers && numOutsiderRoles != expectedOutsiderCountForPlayers - 1) {
    throw new Error("The game needs " + expectedOutsiderCountForPlayers + " outsiders!")
  }
  if (roles.length != players.length - 1) {
    throw new Error("Not enough townsfolk assigned!")
  }

  // shuffle roles all but last player (game creator)
  const shuffledPlayers = shuffle(players.slice(0, -1));
  const shuffledRoles = shuffle(roles);
  var shuffledPlayersWithRoles = shuffledPlayers.map((p, i) => ({
    ...p,
    role: shuffledRoles[i],
  }));

  // assign last player (game creator) as STORYTELLER
  players[players.length - 1].role = STORYTELLER

  return [...shuffledPlayersWithRoles, players[players.length - 1]]
}

function expectedMinionCount(numPlayers: number): number {
  if (numPlayers < 10) return 1
  if (numPlayers < 13) return 2
  return 3
}

function expectedOutsiderCount(numPlayers: number, roles: RoleName[]): number {
  var expected = 0
  if (numPlayers % 3 == 1) expected = 0
  if (numPlayers % 3 == 2) expected = 1
  if (numPlayers % 3 == 0) expected = 2

  if (numPlayers < 7) expected -= 1
  if (roles.includes(BARON)) expected += 2

  return expected
}

function generateMessageForRole(role: RoleName): string {
  return `${role}`;
}

export const clocktowerRules: GameRules = {
  minPlayers: MIN_PLAYERS,
  maxPlayers: MAX_PLAYERS,
  validRoles: validRoles,
  assignRoles: assignRoles,
  generateMessageForRole: generateMessageForRole,
};
