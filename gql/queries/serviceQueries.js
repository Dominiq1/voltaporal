import { gql } from '@apollo/client';

const GET_SERVICE_JOBS = gql`
  query GetServiceJobs($repID: String!) {
    GetServiceJobs(repID: $repID) {
      email
      projectID
      address
      homeownerName
      foreman1
      foreman2
      journeyman1
      journeyman2
      apprentice11
      apprentice12
      apprentice21
      apprentice22
      apprentice31
      apprentice32
      serviceTime
      serviceDate
    }
  }
`;


const GET_PAYROLL = gql`
  query GetWeeklyPayrollReport($repID: String!) {
    GetWeeklyPayrollReport(repID: $repID) {
      piecerate
      homeownerName
    }
  }
`;


const GET_CONSTRUCTION_JOBS = gql`
  query GetConstructionJobs($repID: String!) {
    GetConstructionJobs(repID: $repID) {
      projectID
      projectURL
      Financing
      address
      homeownerName
      serviceTime
      serviceDate
      companyCam
      notes
      serviceEndTime
      task
      foreman1
      foreman2
      foreman3
      foreman4
      journeyman1
      journeyman2
      journeyman3
      journeyman4
      apprentice11
      apprentice12
      apprentice13
      apprentice14
      apprentice21
      apprentice22
      apprentice23
      apprentice24
      apprentice31
      apprentice32
      apprentice33
      apprentice34








    }
  }
`;


const GET_CONSTRUCTION_JOBS_MASTER = gql`
  query GetConstructionJobsMaster($repID: String!) {
    GetConstructionJobsMaster(repID: $repID) {
      projectID
      address
      homeownerName
      serviceTime
      serviceDate
      notes
      task
    }
  }
`;




const GET_QB_JOBS = gql`
  query GetQBUser($repID: String!) {
    GetQBUser(repID: $repID) {
      name
      profileImage
    }
  }
`;


export { GET_SERVICE_JOBS, GET_CONSTRUCTION_JOBS ,GET_QB_JOBS, GET_CONSTRUCTION_JOBS_MASTER, GET_PAYROLL};