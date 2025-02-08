import { Player, RoleName } from "@knigam/role-player/src";
import { clocktowerRules } from "../src/clocktowerRules";

test("assignRoles", () => {
  const players: Player[] = [1, 2, 3, 4, 5].map((i) => ({
    id: `${i}`,
    name: `Player ${i}`,
  }));
  const roles: RoleName[] = [];
  const playersWithRoles = clocktowerRules.assignRoles(players, roles);
  playersWithRoles.forEach((p) => {
    expect(p.role).toBeTruthy();
  });
});
