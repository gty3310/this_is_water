export const createResponse = response => {
  // 
  return $.ajax({
    method: 'POST',
    url: `api/stories/${response.story_id}/responses`,
    data: { response }
  });
};

export const deleteResponse = response => {
  return $.ajax({
    method: 'DELETE',
    url: `api/stories/${response.story_id}/responses/${response.id}`
  });
};
