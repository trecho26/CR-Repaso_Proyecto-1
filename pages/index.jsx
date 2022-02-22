import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Components/Input";

const initialValues = {
  name: "",
  age: "",
  email: "",
  carrer: "",
};

export default function Home() {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es requerido"),
      age: Yup.string().required("Este campo es requerido"),
      email: Yup.string()
        .email("Ingrese un correo valido")
        .required("Este campo es requerido"),
      carrer: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <header className="bg-blue-700 pt-20 pb-40 flex justify-center items-center">
        <h1 className="text-white font-bold text-4xl">Personal Card</h1>
      </header>
      <main className="py-4">
        <div className="container mx-auto flex justify-evenly">
          <form className="shadow-md px-6 py-4 rounded-md h-full">
            <Input
              id="name"
              label="Nombre"
              name="name"
              formik={formik}
              error={formik.errors.name && formik.touched.name}
              helperText={formik.errors.name}
            />
            <Input
              id="age"
              label="Edad"
              name="age"
              formik={formik}
              error={formik.errors.age && formik.touched.age}
              helperText={formik.errors.age}
            />
            <Input
              id="email"
              label="Correo"
              name="email"
              formik={formik}
              error={formik.errors.email && formik.touched.email}
              helperText={formik.errors.email}
            />
            <Input id="carrer" label="Carrera" name="carrer" formik={formik} />
          </form>
          <div className="shadow-md rounded-md h-full mt-[-130px] min-w-[400px] max-w-[600px]">
            <div
              className="h-40 rounded-t-md bg-cover bg-center"
              style={{
                backgroundImage: "url(https://source.unsplash.com/random)",
              }}
            ></div>
            <div className="p-4">
              {/* "H" -> trim() -> "H" */}
              {formik.values.name.trim() !== "" && (
                <p className="font-bold text-xl mb-2">
                  Nombre:{" "}
                  <span className="font-normal">{formik.values.name}</span>
                </p>
              )}

              {formik.values.age.trim() !== "" && (
                <p className="font-bold text-xl mb-2">
                  Edad: <span className="font-normal">{formik.values.age}</span>
                </p>
              )}

              {formik.values.email.trim() !== "" && (
                <p className="font-bold text-xl mb-2">
                  Correo:{" "}
                  <span className="font-normal">{formik.values.email}</span>
                </p>
              )}

              {formik.values.carrer.trim() !== "" && (
                <p className="font-bold text-xl">
                  Carrera:{" "}
                  <span className="font-normal">{formik.values.carrer}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
