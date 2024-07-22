import React from 'react';
import { Grid, Typography } from '@mui/material';
import './RecentActivities.css';

const RecentActivities = () => {
  return (
    <div className="recent-activities">
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Recent Activities
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Objective</strong>
          </Typography>
          <Typography variant="body1">
            Aspiring IT professional with a strong foundation in engineering principles, specializing in Information Technology and Engineering. Seeking a challenging position that utilizes my technical skills and offers opportunities for professional growth.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Option</strong>
          </Typography>
          <Typography variant="body1">
            Aspiring IT professional with a strong foundation in engineering principles, specializing in Information Technology and Engineering. Seeking a challenging position that utilizes my technical skills and offers opportunities for professional growth.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Objective</strong>
          </Typography>
          <Typography variant="body1">
            Aspiring IT professional with a strong foundation in engineering principles, specializing in Information Technology and Engineering. Seeking a challenging position that utilizes my technical skills and offers opportunities for professional growth.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Objective</strong>
          </Typography>
          <Typography variant="body1">
            Aspiring IT professional with a strong foundation in engineering principles, specializing in Information Technology and Engineering. Seeking a challenging position that utilizes my technical skills and offers opportunities for professional growth.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Objective</strong>
          </Typography>
          <Typography variant="body1">
            Aspiring IT professional with a strong foundation specializing in Information Technology and Engineering. Seeking a challenging position that utilizes my technical skills and offers opportunities for professional growth.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecentActivities;
