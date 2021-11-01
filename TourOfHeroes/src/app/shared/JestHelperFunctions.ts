import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export function get(
  debugElement: DebugElement,
  roleName: string
): DebugElement {
  return debugElement.query(By.css(`[data-role="${roleName}"]`));
}

export function getAll(
  debugElement: DebugElement,
  roleName: string
): DebugElement[] {
  return debugElement.queryAll(By.css(`[data-role="${roleName}"]`));
}
