/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { UnitListComponent } from './unit-list.component';

describe('Component: UnitList', () => {
  it('should create an instance', () => {
    let component = new UnitListComponent();
    expect(component).toBeTruthy();
  });
});
