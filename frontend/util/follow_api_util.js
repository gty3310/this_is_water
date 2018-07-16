export const followUser = id => {
  return $.ajax({
    method: 'POST',
    url: `api/follows/${id}`
  });
};

export const unfollowUser = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};
