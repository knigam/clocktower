import { Player, RoleName } from "@knigam/role-player/src";
import { clocktowerRules } from "../src/clocktowerRules";
import { GameState } from "@knigam/role-player";

test("assignRoles", () => {
  const players: Player[] = [1, 2, 3, 4, 5].map((i) => ({
    id: `${i}`,
    name: `Player ${i}`,
  }));
  const roles: RoleName[] = [];
  const playersWithRoles = clocktowerRules.assignRoles({ players } as GameState, roles);
  playersWithRoles.forEach((p) => {
    expect(p.role).toBeTruthy();
  });
});
