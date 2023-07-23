const corsOptions = {
  origin: '*',
  methods: '*',
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true,
  exposedHeaders: ['Set-Cookie'],
};

export default corsOptions;
