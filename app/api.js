const baseUrl = 'https://kyiv-rn-workshop-server.wixapps.net/users.json';

export async function fetchUsers() {
  const response = await fetch(baseUrl);
  const users = await response.json();
  return users.payload;
}
