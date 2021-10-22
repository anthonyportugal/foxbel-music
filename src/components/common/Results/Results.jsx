import { Grid } from '@mui/material'
import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import './results.scss'

const Results = () => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={2}>
    //     <AlbumCard>xs=8</AlbumCard>
    //   </Grid>
    //   <Grid item xs={2}>
    //     <AlbumCard>xs=4</AlbumCard>
    //   </Grid>
    //   <Grid item xs={2}>
    //     <AlbumCard>xs=4</AlbumCard>
    //   </Grid>
    //   <Grid item xs={2}>
    //     <AlbumCard>xs=8</AlbumCard>
    //   </Grid>
    //   <Grid item xs={2}>
    //     <AlbumCard>xs=8</AlbumCard>
    //   </Grid>
    // </Grid>
    <div className="Results">
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
    </div>
  )
}

export default Results
