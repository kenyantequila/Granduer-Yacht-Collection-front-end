const baseURL = 'http://localhost:5000'; // Update with your backend URL if different

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};
export const loginUser = async (data) => {
  const response = await fetch(`${baseURL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const getYachts = async () => {
  const response = await fetch(`${baseURL}/yachts/yachtlist`);
  return handleResponse(response);
};

export const getYachtById = async (id) => {
  const response = await fetch(`${baseURL}/yachts/${id}`);
  return handleResponse(response);
};

export const createBooking = async (data) => {
  const response = await fetch(`${baseURL}/bookings/bookinglist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const getBookings = async () => {
  const response = await fetch(`${baseURL}/bookings/bookinglist`);
  return handleResponse(response);
};

export const registerUser = async (data) => {
  const response = await fetch(`${baseURL}/users/userlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};


const api = {
  getYachts,
  getYachtById,
  createBooking,
  getBookings,
  registerUser,
  loginUser,
};

export default api;
