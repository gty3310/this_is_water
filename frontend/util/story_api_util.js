export const fetchStories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/stories'
  });
};

export const fetchStory = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/stories/${id}`
  });
};

export const createStory = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/stories',
    data: formData
  });
};

export const updateStory = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/stories/${id}`,
    data: formData
  });
};

export const deleteStory = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/stories/${id}`
  });
};
