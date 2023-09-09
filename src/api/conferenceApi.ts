import axios from 'axios'

export const conferenceApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000,
  withCredentials: false,
});

export const getConferences = () => {
  return conferenceApi.get(`/api/getConferences`);
};

export const getConferenceById = (id: string) => {
  return conferenceApi.get(`/api/getConference/${id}`);
};
