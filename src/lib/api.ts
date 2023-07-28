export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: {
  url: string;
  method: 'GET' | 'POST';
  body?: Record<string, unknown> | string;
  json?: boolean;
}) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (link: string) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: link,
    json: false,
  });
};
