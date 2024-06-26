import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user;
  let photo;
  try {
    user = await createUser();
    photo = await uploadPhoto();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { user, photo };
}
