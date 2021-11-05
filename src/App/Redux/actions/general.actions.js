export const REBOOT = "[GENERAL] REBOOT"

export const reboot = () => {
    sessionStorage.clear();
    return async (dispatch) => {
      dispatch({type: REBOOT});
    }
  }