import { RoleName, GameRules, Player } from "@knigam/role-player";

const MIN_PLAYERS = 0;
const MAX_PLAYERS = 0;
const validRoles = new Set<string>();

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
