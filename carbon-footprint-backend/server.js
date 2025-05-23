import express from 'express';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4001;
const app = express();

app.use(
    cors({
      origin: 'https://calculator.carbonzero.day', // Allow access from your frontend
    })
  );
app.use(express.json());
app.use('/', paymentRoutes);
app.use('/api', paymentRoutes);
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Backend Server listening on PORT ${PORT}`);
});