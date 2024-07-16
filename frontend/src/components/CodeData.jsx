import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const CodeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leetcode', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">LeetCode Data</h2>
        <p>Total Solved: {data.totalSolved}</p>
        <p>Total Questions: {data.totalQuestions}</p>
        <p>Easy Solved: {data.easySolved}</p>
        <p>Total Easy: {data.totalEasy}</p>
        <p>Medium Solved: {data.mediumSolved}</p>
        <p>Total Medium: {data.totalMedium}</p>
        <p>Hard Solved: {data.hardSolved}</p>
        <p>Total Hard: {data.totalHard}</p>
        <p>Acceptance Rate: {data.acceptanceRate}%</p>
        <p>Ranking: {data.ranking}</p>
        <p>Contribution Points: {data.contributionPoints}</p>
        <p>Reputation: {data.reputation}</p>
      </div>
    </>
  );
};

export default CodeData;
