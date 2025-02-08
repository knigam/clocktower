import { RoleName, GameRules, Player } from "@knigam/role-player";

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

// Minions
const POISONER = "Poisoner";
const SPY = "Spy";
const SCARLET_WOMAN = "Scarlet Woman";
const BARON = "Baron";

// Demons
const IMP = "Imp";

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

function assignRoles(players: Player[]): Player[] {
  return players;
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
