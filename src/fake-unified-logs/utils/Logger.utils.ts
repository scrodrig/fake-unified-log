import { HeaderDTO } from '../dto/Header.dto';
import { FakeLogDto } from '../interfaces';

export const logger = (
  headers: HeaderDTO,
  log: FakeLogDto,
  endpoint = 'start',
) => {
  const {
    content: {
      context: { businessKeyGroups },
    },
  } = log;
  const entry = {
    endpoint,
    headers: {
      'x-user': headers['x-user'],
      'x-platform': headers['x-platform'],
    },
    businessKeyGroups,
  };

  const logger = `${entry.endpoint}\t${Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Chicago',
  }).format(new Date())}
  \t${JSON.stringify(entry.headers)}\n
  \t${JSON.stringify(entry.businessKeyGroups)}`;
  console.log(logger);
};
