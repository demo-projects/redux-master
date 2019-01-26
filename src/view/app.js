import {blog} from "../core/store.js";
import {ACTION_TYPES} from "../core/actions/types.js";

document.getElementById('dispatch').addEventListener('click', () => {
  blog.dispatch({
    type: ACTION_TYPES.COMMAND,
    payload: {},
    meta: {}
  })
});