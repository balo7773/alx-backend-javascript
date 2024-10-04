import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = {upload, create};
  } catch (error) {
    res = { photo: null, user: null };
  }
  return res;
}