import React from "react";
import { FontAwesomeIcon } from '../fontawesome';



const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the search form to your API
};



export default function Form({ handleChange }, { keyword }) {

    return (
        <form onSubmit={handleSubmit} className="form_in_form">
            <label htmlFor="">Search Filters</label>
            <input
                name="keyword"
                type="text"
                placeholder="enter Keyword"
                onChange={handleChange}
            />
            <select
                // value={ondition}
                name="condition"
                onChange={handleChange}
            >
                <option value="Condition">Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
            </select>
            <select
                // value={make}
                name="make"
                onChange={handleChange}
            >
                <option value="">Select Make</option>
                {['Acura', 'Alfa Romeo', 'Audi', /* ... */].map((make) => (
                    <option key={make} value={make}>
                        {make}
                    </option>
                ))}
            </select>
            <select
                // value={model}
                name="model"
                onChange={handleChange}
            >
                <option value="">Select Model</option>
                {/* Populate this select based on the selected make */}
            </select>
            <select
                // value={type}
                name="type"
                onChange={handleChange}
            >
                <option value="">Select Type</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="SUV">SUV</option>
                <option value="Van">Van</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Other">Other</option>
            </select>
            <select
                // value={year}
                name="year"
                onChange={handleChange}
            >
                <option selected value="all">all</option>
                {Array.from({ length: 35 }, (_, i) => 1990 + i).map((year) => (

                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <label htmlFor="">Mileage</label>
            <input
                type="number"
                // value={mileageMin}
                name="mileageMin"
                placeholder="Mileage Min"
                onChange={handleChange}
            />

            <input
                type="number"
                // value={mileageMax}
                name="mileageMax"
                placeholder="Mileage Max"
                onChange={handleChange}
            />
            <label htmlFor="">Fuel Type</label>
            <label htmlFor=""><input
                type="checkbox"
                name="fuelTypes"
                value="Gasoline"
                onChange={handleChange}
            />Gasoline</label>

            <label htmlFor="">
                <input
                    type="checkbox"
                    name="fuelTypes"
                    value="hybrid"
                    onChange={handleChange}
                />
                Hybrid
            </label>

            <label htmlFor="">
                <input
                    type="checkbox"
                    name="fuelTypes"
                    value="electric"
                    onChange={handleChange}
                />
                Electric
            </label>

            <label htmlFor="">
                <input
                    type="checkbox"
                    name="fuelTypes"
                    value="diesel"
                    onChange={handleChange}
                />
                Diesel
            </label>

            <label htmlFor="">Transmission</label>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="transmissions"
                    value="Automatic"
                    onChange={handleChange}
                />
                Automatic
            </label>
            <label htmlFor="">
                <input
                    type="checkbox"
                    name="transmissions"
                    value="Manual"
                    onChange={handleChange}
                />
                Manual
            </label>

            <button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Search</button>
        </form>
    );
};





