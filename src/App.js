import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import PopularListing from "./components/popularListing";
import Navbar from "./components/footer/navbar";
import Body from "./components/footer/body";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/footer/scrolltotop";
import Services from "./components/services";


export default function App() {

    const [keyword, setKeyword] = React.useState('');
    const [condition, setCondition] = React.useState("");
    const [make, setMake] = React.useState("");
    const [model, setModel] = React.useState("");
    const [type, setType] = React.useState("");
    const [year, setYear] = React.useState("");
    const [mileageMin, setMileageMin] = React.useState("");
    const [mileageMax, setMileageMax] = React.useState("");
    const [fuelTypes, setFuelTypes] = React.useState('');
    const [transmissions, setTransmissions] = React.useState('');



    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "keyword":
                setKeyword(value);
                break;
            case "condition":
                setCondition(value);
                break;
            case "make":
                setMake(value);
                break;
            case "model":
                setModel(value);
                break;
            case "type":
                setType(value);
                break;
            case "year":
                setYear(value);
                break;
            case "mileageMin":
                setMileageMin(value);
                break;
            case "mileageMax":
                setMileageMax(value);
                break;
            case "fuelTypes":
                setFuelTypes(value);
                break;
            case "transmissions":
                setTransmissions(value);
                break;
            default:
                break;
        }
    };



    return (
        <>

            {/* 
            <div className="container_of_form_popularlisting">

                <Form handleChange={handleChange} keyword={keyword} />
                <PopularListing
                    keyword={keyword}
                    condition={condition}
                    make={make}
                    model={model}
                    type={type}
                    year={year}
                    mileageMin={mileageMin}
                    mileageMax={mileageMax}
                    fuelTypes={fuelTypes}
                    transmissions={transmissions}
                />

            </div>
            <Footer />
            <ScrollToTop /> */}

            <Services />
        </>



        // <div className="app-main">

        //     <div className="top-part">
        //         <Header />
        //         <Nav />

        //     </div>
        //     <div className="Used_vechicles">
        //         <h1>Used Vehicles For Sale </h1>
        //     </div>

        // </div>



    )
}
