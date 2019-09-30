import IAction from '../../models/IAction';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REMOVE: string = 'ErrorAction.REMOVE';

export const removeById = (id: string): IAction<string> => {
  return ActionUtility.createAction(REMOVE, id);
};

export const CLEAR_ALL: string = 'ErrorAction.CLEAR_ALL';

export const clearAll = (): IAction<undefined> => {
  return ActionUtility.createAction(CLEAR_ALL);
};
