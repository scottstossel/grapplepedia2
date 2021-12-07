import { useEffect, useState } from "react";
import {postTechniqueToApi} from '../services/techniquesService';


const AddTechniqueView = () => {
  const [technique, setTechnique] = useState({
    name: '',
    description: '',
    video: '',
    position: ''
  });

  useEffect(() => {
    getPositions();
  }, []);
}

const handleChange = (event) => {
  setTechnique({
    ...technique,
    [event.target.name]: event.target.value,
  });
}

const handleSubmit = (event) => {
  event.preventDefault();
  postTechniqueToApi(technique);
}