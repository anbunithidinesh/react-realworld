export const DEFAULT_AVATAR = '/images/avatar.svg';

export function getAvatarUrl(image) {
  if (
    !image ||
    /api\.realworld\.io|productionready\.io/i.test(image) ||
    /^data:image\/svg\+xml/i.test(image)
  ) {
    return DEFAULT_AVATAR;
  }
  return image;
}

export function onAvatarError(event) {
  const img = event && event.target;
  if (img && img.src && !img.src.endsWith(DEFAULT_AVATAR)) {
    img.src = DEFAULT_AVATAR;
  }
}
