import { Link, useNavigate } from "react-router-dom";
const Back = () => {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate(-1)}
      width="18"
      height="28"
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2195 26.4203C17.1914 25.4867 17.1922 23.9324 16.2214 22.9978L9.86802 16.8817C8.23349 15.3082 8.23349 12.6918 9.86802 11.1183L16.2214 5.00221C17.1922 4.06762 17.1914 2.51326 16.2195 1.57973C15.3007 0.697176 13.8491 0.697176 12.9303 1.57973L3.00321 11.1153C1.36449 12.6893 1.36449 15.3107 3.00321 16.8847L12.9303 26.4203C13.8491 27.3028 15.3007 27.3028 16.2195 26.4203Z"
        fill="#EBEBEB"
      />
    </svg>
  );
};

export default Back;
