import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  let token = Cookies.get("token");

  // Convert Number to Rupiah
  const convertRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // Break the string of description
  const breakString = (text) => {
    //validation for error handling, if description doesnt exist then dont run this function.
    if (text != null) {
      let result = text.slice(0, 10);
      return result.concat("...");
    }
    return text;
  };

  //=========================================================
  //              Fetching Data Method (JobList)
  //=========================================================
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
          // console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  //=========================================================
  //     Filter and Search Data Method (ExploreJob)
  //=========================================================
  const [inputSearchData, setInputSearchData] = useState("");
  const handleInputSearch = (event) => setInputSearchData(event.target.value);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    
    setData(null);
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
        let searchData = data.filter((res) => {
          return res.title.toLowerCase().includes(inputSearchData.toLocaleLowerCase());
        })
        setData([...searchData]);
        
      })
      .catch((error) => {
        console.log(error);
      });
      setInputSearchData("");
  };
  

  //=========================================================
  //   Creating Method (FOR SIGNUP/REGISTER)
  //=========================================================
  const [inputSignUp, setInputSignUp] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleInputSignUp = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputSignUp({ ...inputSignUp, [name]: value });
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    let { name, image_url, email, password } = inputSignUp;

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        // let data = res.data;
        // let user = res.data.user;
        console.log(res);
        console.log("REGISTER BERHASIL, SILAHKAN LOGIN DULU YAA");
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //=========================================================
  //   Creating Data Method (FOR SIGNIN/LOGIN)
  //=========================================================
  const [inputSignIn, setInputSignIn] = useState({
    email: "",
    password: "",
  });

  const handleInputSignIn = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputSignIn({ ...inputSignIn, [name]: value });
  };

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    let { email, password } = inputSignIn;

    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        let data = res.data;
        let user = res.data.user;
        console.log(res);
        // console.log(res.data.user.email)
        console.log("LOGIN BERHASIL");

        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("id", user.id, { expires: 1 });
        Cookies.set("email", user.email, { expires: 1 });
        Cookies.set("name", user.name, { expires: 1 });
        Cookies.set("image", user.image_url, { expires: 1 });
        Cookies.set("created", user.created_at, { expires: 1 });
        Cookies.set("updated", user.updated_at, { expires: 1 });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //=========================================================
  //   Creating Data Method (FOR CHANGE PASSWORD)
  //=========================================================
  const [inputChangePassword, setInputChangePassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleInputChangePassword = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputChangePassword({ ...inputChangePassword, [name]: value });
  };

  const handleSubmitChangePassword = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } =
      inputChangePassword;

    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        { current_password, new_password, new_confirm_password },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        console.log("SELAMAT, GANTI PASSWORD BERHASIL");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //=========================================================
  //         Creating and Update Data Method (FOR JOB)
  //=========================================================
  const [currentId, setCurrentId] = useState(-1);

  const [inputJob, setInputJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleInputJob = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputJob({ ...inputJob, [name]: value });
  };

  const handleSubmitJob = (event) => {
    event.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = inputJob;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/dashboard/AllJobList");
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/AllJobList");
        });
    }

    setCurrentId(-1);

    setInputJob({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  const handleEditJob = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    navigate(`/dashboard/editjob/${idData}`);
  };

  //=========================================================
  //              Delete Data Method (FOR JOB)
  //=========================================================
  const handleDeleteJob = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      });
  };

  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    inputJob,
    setInputJob,
    inputSignIn,
    setInputSignIn,
    inputSignUp,
    setInputSignUp,
    inputChangePassword,
    setInputChangePassword,
    inputSearchData,
    setInputSearchData
  };

  let handleFunction = {
    breakString,
    convertRupiah,
    handleInputSignIn,
    handleSubmitSignIn,
    handleInputSignUp,
    handleSubmitSignUp,
    handleInputChangePassword,
    handleSubmitChangePassword,
    handleDeleteJob,
    handleEditJob,
    handleInputJob,
    handleSubmitJob,
    handleInputSearch,
    handleSubmitSearch
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
