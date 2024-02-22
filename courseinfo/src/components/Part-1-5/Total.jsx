const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return <p>Total exercises: {totalExercises}</p>;
};

export default Total;
