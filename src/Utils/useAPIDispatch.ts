/**
 * Implementation of custom hooks to dispatch action for API call
 */

import { useDispatch } from "react-redux";
import * as ActionType from "../Actions";
import { useEffect } from "react";

export const useAPIDispatch = (
  fetchTypeRequest: string,
  serviceName: string,
  pageNo: number,
  searchQuery: string
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: fetchTypeRequest,
      serviceName: serviceName,
    });
  }, [dispatch, fetchTypeRequest, serviceName, pageNo, searchQuery]);
};
