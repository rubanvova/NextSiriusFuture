// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DataService from '../../lib/data-service';

export default (req, res) => {
  const data = DataService.getData();
  res.statusCode = 200;
  res.json(data);
};
