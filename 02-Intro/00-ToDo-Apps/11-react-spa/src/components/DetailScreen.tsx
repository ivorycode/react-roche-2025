import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function DetailScreen() {
  const { id } = useParams<{ id:string }>();
  const navigate = useNavigate();

    function doNavigate() {
        navigate('/done')
    }

    return (
    <div>
      <h3>Detail for {id}</h3>
      <div>
        <Link to="/">back</Link>
          <button onClick={doNavigate}>Go Home</button>
      </div>
      <form className="new-todo">Not yet implemented ...</form>
    </div>
  );
}

export default DetailScreen;
