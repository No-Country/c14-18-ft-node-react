import { fetchDoctors } from "@/services/fetchDoctors"
import { useEffect, useState } from "react"
import { useDebounce } from "./useDebouncer"

export const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchDoctors()
            setDoctors(data)
        }

        fetch()
    }, [])

    const debouncedInput = useDebounce(inputValue, 300)

    const filteredDoctors = doctors.filter(({ speciality, name, location }) => {
        const hasSelectedLocation = selectedLocation !== '';
        const hasSelectedSpecialty = selectedSpecialty !== '';

        if (!hasSelectedLocation && !hasSelectedSpecialty && inputValue === '') {
            return true;
        } else if (hasSelectedLocation && hasSelectedSpecialty) {
            return location === selectedLocation && speciality === selectedSpecialty && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else if (hasSelectedLocation) {
            return location === selectedLocation && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else if (hasSelectedSpecialty) {
            return speciality === selectedSpecialty && name.toLowerCase().includes(debouncedInput.toLowerCase());
        } else {
            return name.toLowerCase().includes(debouncedInput.toLowerCase());
        }
    });


    return {doctors, filteredDoctors, setInputValue, setSelectedLocation, setSelectedSpecialty}
}