import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Spacer,
  Alert,
  Textarea,
  useToast
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import JobPositionService from "../services/jobPositionService";
import JobWorkingTypeService from "../services/jobWorkingTypeService";
import CityService from "../services/cityService";
import WorkingPreferenceService from "../services/workingpreferenceService";
import EmployerService from "../services/employerService";
import JobAdvertisementService from "../services/jobAdvertisementService";

const validationSchema = yup.object({
  jobPosition: yup.object().shape({
    id: yup.number().required("İş Pozisyonu seçiniz"),
  }),
  description: yup
    .string()
    .max(2300, "Açıklama çok uzun")
    .required("Açıklama gerekli"),
  minSalary: yup.number(),
  maxSalary: yup.number(),
  city: yup.object().shape({
    id: yup.number().required("Şehir seçiniz"),
  }),
  freePositionAmount: yup
    .number()
    .positive("Pozitif bir sayı giriniz")
    .required("Açık Pozisyon gerekli"),
  employer: yup.object().shape({
    id: yup.number().required("Şirket seçiniz"),
  }),
  workingPreference: yup.object().shape({
    id: yup.number().required("Çalışma tercihi seçiniz"),
  }),
  workingType: yup.object().shape({
    id: yup.number().required("Çalışma türü seçiniz"),
  }),
  startDate: yup.date().required("Başlama tarihi gerekli"),
  endDate: yup.date().required("Bitiş tarihi gerekli"),
});

export default function JobAdvertisementAdd() {
  const [jobPositions, setJobPositions] = useState([]);
  const [jobWorkingTypes, setJobWorkingTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [workingPreferences, setWorkingPreferences] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const toast = useToast()

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));

    let jobWorkingTypeService = new JobWorkingTypeService();
    jobWorkingTypeService
      .getJobWorkingTypes()
      .then((result) => setJobWorkingTypes(result.data.data));

    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));

    let workingPreferenceService = new WorkingPreferenceService();
    workingPreferenceService
      .getWorkingPreference()
      .then((result) => setWorkingPreferences(result.data.data));

    let employerService = new EmployerService();
    employerService
      .getEmployer()
      .then((result) => setEmployers(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      jobPosition: {
        id: null,
      },
      description: "",
      minSalary: null,
      maxSalary: null,
      city: {
        id: null,
      },
      freePositionAmount: null,
      employer: {
        id: null,
      },
      workingPreference: {
        id:null,
      },
      workingType: {
        id: null,
      },
      startDate: "",
      endDate: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        let jobAdvertisementService = new JobAdvertisementService();
        const result = await jobAdvertisementService.add(values);
        setJobAdvertisements(result.data.data);
      } catch (errors) {
        bag.setErrors({ general: errors.response.data.message });
      }
    },
  });

  return (
    <Flex align="center" justify="center">
      <Box pt={10} width="800px">
        <Heading textAlign="center" size="lg" mb={4}>
          İş İlanı Ekle
        </Heading>
        <Box my={5}>
              {
                formik.errors.general && (
                  <Alert status="error">
                      {formik.errors.general}
                  </Alert>
                )
              }
            </Box>  
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>İş Pozisyonu</FormLabel>
            <Select
              placeholder="İş Pozisyonu Seç"
              name="jobPosition.id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.jobPosition.id}
              isInvalid={formik.touched.jobPosition && formik.errors.jobPosition}
            >
              {jobPositions.map((jobPosition) => (
                <option key={jobPosition.id} value={jobPosition.id}>
                  {jobPosition.title}
                </option>
              ))}
            </Select>
          </FormControl>

          <Spacer h="2" />

          <FormControl>
            <FormLabel>İş Açıklaması</FormLabel>
            <Textarea
              placeholder="İş Açıklaması"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              isInvalid={formik.touched.description && formik.errors.description}
              size="lg"
              resize="none"
              h="200px" // Yükseklik eklemek için
            />
          </FormControl>

          <Spacer h="2" />

          <Flex justify="space-between" mt={10}>
            <FormControl width="48%">
              <FormLabel>Minimum Maaş</FormLabel>
              <Input
                placeholder="Minimum Maaş"
                name="minSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.minSalary}
                isInvalid={formik.touched.minSalary && formik.errors.minSalary}
              />
            </FormControl>

            <FormControl width="48%">
              <FormLabel>Maksimum Maaş</FormLabel>
              <Input
                placeholder="Maksimum Maaş"
                name="maxSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maxSalary}
                isInvalid={formik.touched.maxSalary && formik.errors.maxSalary}
              />
            </FormControl>
          </Flex>

          <Spacer h="2" />

          <Flex justify="space-between">
            <FormControl width="48%">
              <FormLabel>Şehir</FormLabel>
              <Select
                placeholder="Şehir Seç"
                name="city.id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city.id}
                isInvalid={formik.touched.city && formik.errors.city}
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl width="48%">
              <FormLabel>Açık Pozisyon</FormLabel>
              <Input
                placeholder="Açık Pozisyon Adedi"
                name="freePositionAmount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.freePositionAmount}
                isInvalid={formik.touched.freePositionAmount && formik.errors.freePositionAmount}
              />
            </FormControl>
          </Flex>

          <Spacer h="2" />

          <FormControl>
            <FormLabel>Şirket İsmi</FormLabel>
            <Select
              placeholder="Şirket Seç"
              name="employer.id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.employer.id}
              isInvalid={formik.touched.employer && formik.errors.employer}
            >
              {employers.map((employer) => (
                <option key={employer.id} value={employer.id}>
                  {employer.companyName}
                </option>
              ))}
            </Select>
          </FormControl>

          <Spacer h="2" />

          <Flex justify="space-between">
            <FormControl width="48%">
              <FormLabel>Çalışma Zamanı</FormLabel>
              <Select
                placeholder="Çalışma Zamanı Seç"
                name="workingType.id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.workingType.id}
                isInvalid={formik.touched.workingType && formik.errors.workingType}
              >
                {jobWorkingTypes.map((jobWorkingType) => (
                  <option key={jobWorkingType.id} value={jobWorkingType.id}>
                    {jobWorkingType.workingTypeName}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl width="48%">
              <FormLabel>Çalışma Türü</FormLabel>
              <Select
                placeholder="Çalışma Türü Seç"
                name="workingPreference.id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.workingPreference.id}
                isInvalid={formik.touched.workingPreference && formik.errors.workingPreference}
              >
                {workingPreferences.map((workingPreference) => (
                  <option
                    key={workingPreference.id}
                    value={workingPreference.id}
                  >
                    {workingPreference.workingPreferenceName}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Flex>
          <Flex justify="space-between">
            <FormControl width="48%">
              <FormLabel>Başlama Tarihi</FormLabel>
              <Input
                placeholder="Başlama Tarihi"
                type="date"
                name="startDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
                isInvalid={formik.touched.startDate && formik.errors.startDate}
              />
            </FormControl>

            <FormControl width="48%">
              <FormLabel>Bitiş Tarihi</FormLabel>
              <Input
                placeholder="Bitiş Tarihi"
                type="date"
                name="endDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
                isInvalid={formik.touched.endDate && formik.errors.endDate}
              />
            </FormControl>
          </Flex>

          <Spacer h="2" />

          {formik.errors.general && (
            <Alert status="error">{formik.errors.general}</Alert>
          )}

          <Button width="full" colorScheme="blue" type="submit" mb={10} onClick={() =>
              toast({
                title: "İş İlanı Eklendi",
                position:"top-right",
                status:"success",
                isClosable: true,
              })
            }>
            İlanı Ekle
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
