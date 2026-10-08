export type Language = "en" | "es";
export type ModuleId = "attendance" | "communication" | "students" | "reports" | "permissions" | "roles" | "workflows";
export type SchoolModule = { id: ModuleId; name: string; headline: string; description: string; points: readonly string[] };

const people = [
  "Francisco Ulises González Feldman",
  "Santino Conejo Palacios",
  "Benjamin Tomas Ison Iannello",
  "Martin Valentino Lissi",
  "Agustin Morales",
] as const;

export const siteCopy = {
  en: {
    nav: { product: "The software", school: "Our story", approach: "Your school", team: "The team", contact: "Let's talk", open: "Open menu", close: "Close menu" },
    hero: {
      label: "NUVRA ACADEMY · SOFTWARE FOR SCHOOLS",
      title: ["A school day.", "All connected."],
      description: "We’re a student-founded company building software that brings schools, families and everyday tasks closer together.",
      cta: "Explore the software",
      previous: "Previous module", next: "Next module", pause: "Pause rotation", play: "Start rotation",
      preview: "Module concepts · illustrative interfaces",
      origin: "Built in Buenos Aires. Being tested at the school where it began.",
    },
    modules: [
      { id: "attendance", name: "Attendance", headline: "Every school day, accounted for.", description: "Bring daily attendance into one place so school teams can follow what is happening in each course.", points: ["Daily attendance records", "Follow-up by course", "Information for the right people"] },
      { id: "communication", name: "Communication", headline: "Keep families in the conversation.", description: "Help school messages reach families and teams, with a shared place for the information that matters.", points: ["School-to-family communication", "Information with context", "Less scattered messaging"] },
      { id: "students", name: "Students", headline: "The context behind every student.", description: "Organize student information so the people who support them can find the context they need.", points: ["Organized student records", "Course information", "Access adapted to each role"] },
      { id: "reports", name: "Reports", headline: "Make information easier to use.", description: "Bring school records together in reports that help teams understand and organize their day-to-day work.", points: ["School information in one place", "Clearer records", "Support for everyday decisions"] },
      { id: "permissions", name: "Permissions", headline: "Give every request a place.", description: "Organize requests and their review so the school can follow each process with less manual coordination.", points: ["Requests and review", "Clear responsibilities", "Processes adapted to the school"] },
      { id: "roles", name: "Roles", headline: "A place for everyone. The right access.", description: "Students, families, teachers and school teams need different information. NUVRA is built around those differences.", points: ["Access by role", "Different views for different needs", "School-defined responsibilities"] },
      { id: "workflows", name: "Workflows", headline: "Make room for your way of working.", description: "Connect everyday administrative tasks around the routines your school already knows.", points: ["Administrative coordination", "Connected school routines", "Room for new modules"] },
    ] satisfies SchoolModule[],
    product: { label: "THE SOFTWARE", title: ["Less scattered.", "More connected."], description: "These modules already exist in NUVRA. We adapt them with each school, and build new ones when a real need calls for it.", detail: "Explore a module", example: "Example view", selected: "Selected module" },
    school: {
      label: "WHERE IT ALL STARTED", title: ["Our first school.", "Our own school."],
      intro: "NUVRA began as a school project at E.E.S.T. N.º 1 Manuel Belgrano. We study there. We know what it feels like when a message gets lost or a simple task needs three different spreadsheets.",
      body: "Today there is a working demo. Some courses and other members of the school are testing parts of the system. The school is evaluating whether to use it in everyday life next year.",
      closing: "We want this to be the first of many schools we build with.",
      schoolType: "TECHNICAL SECONDARY SCHOOL", schoolName: "Manuel Belgrano", schoolNumber: "E.E.S.T. N.º 1", location: "Santos Lugares, Buenos Aires", relationship: "Where we study. Where NUVRA began.",
      facts: ["Working demo", "Testing with courses and users", "Everyday use under evaluation"],
    },
    approach: {
      label: "BUILT AROUND YOUR SCHOOL", title: ["YOUR", "SCHOOL.", "YOUR WAY."],
      text: "Your identity, your people, your routines. We work with each institution to adapt NUVRA to the way it operates.",
      points: ["Your visual identity", "Modules that fit your needs", "Workflows shaped with your team"],
      sample: "One system. Your identity.", choose: "Try an example identity", identity: "Your school", note: "A small example of what can change. Personalization goes beyond colors.",
      themes: ["Forest", "Cobalt", "Clay"],
    },
    team: { label: "THE PEOPLE BEHIND NUVRA", title: ["It starts with us."], text: "Five students from Buenos Aires, turning a school project into a company. We build, listen and keep improving it with the people who use it.", people, roles: ["Founder / Technical Lead", "Co-founder", "Early team", "Early team", "Early team"] },
    contact: { label: "LET’S BUILD TOGETHER", title: ["What does your", "school need?"], text: "Tell us how your school works and what could work better. We’d like to hear it.", cta: "Talk to the founders", email: "founders@nuvraacademy.com.ar" },
    ui: { school: "Your school", example: "Illustrative view", course: "Course", today: "Today", attendance: "Attendance", present: "Present", absent: "Absent", student: "Student", family: "Families", teachers: "Teachers", staff: "School team", students: "Students", message: "School notice", messageTitle: "A message that reaches home.", messageText: "School and families, sharing the same information.", sent: "School → Families", records: "Student records", profile: "School information", report: "Course overview", reportSub: "Information for your school team", request: "Permission request", review: "In review", approved: "Reviewed", sentRequest: "Request received", access: "Access by role", workflow: "A shared school routine", task: "Administrative task", assigned: "Team review", finished: "Ready to follow up", morning: "School workspace", greeting: "Everything for your school day.", quick: "Your modules", previewNote: "Example data" },
    footer: "Software for schools. Built from inside one.", back: "Back to top",
  },
  es: {
    nav: { product: "El software", school: "Nuestra historia", approach: "Tu escuela", team: "El equipo", contact: "Hablemos", open: "Abrir menú", close: "Cerrar menú" },
    hero: {
      label: "NUVRA ACADEMY · SOFTWARE PARA ESCUELAS",
      title: ["La vida escolar.", "Más conectada."],
      description: "Somos una empresa fundada por estudiantes. Construimos software para acercar a las escuelas, las familias y las tareas de todos los días.",
      cta: "Conocé el software",
      previous: "Módulo anterior", next: "Módulo siguiente", pause: "Pausar giro", play: "Iniciar giro",
      preview: "Conceptos de módulos · interfaces ilustrativas",
      origin: "Hecho en Buenos Aires. En pruebas en la escuela donde nació.",
    },
    modules: [
      { id: "attendance", name: "Asistencia", headline: "Cada día de clase, en un mismo lugar.", description: "Reunimos la asistencia diaria para que el equipo escolar pueda seguir lo que pasa en cada curso.", points: ["Registro diario de asistencia", "Seguimiento por curso", "Información para quienes la necesitan"] },
      { id: "communication", name: "Comunicación", headline: "Que las familias sean parte.", description: "Ayudamos a que los mensajes de la escuela lleguen a las familias y los equipos, con un lugar compartido para lo importante.", points: ["Comunicación de la escuela a las familias", "Información con contexto", "Menos mensajes dispersos"] },
      { id: "students", name: "Estudiantes", headline: "El contexto de cada estudiante.", description: "Organizamos la información de los estudiantes para que quienes los acompañan encuentren lo que necesitan.", points: ["Registros organizados", "Información por curso", "Acceso adaptado a cada rol"] },
      { id: "reports", name: "Reportes", headline: "Información más fácil de usar.", description: "Reunimos los registros escolares en reportes que ayudan a entender y organizar el trabajo de todos los días.", points: ["Información escolar en un mismo lugar", "Registros más claros", "Apoyo para las decisiones cotidianas"] },
      { id: "permissions", name: "Permisos", headline: "Un lugar para cada solicitud.", description: "Organizamos las solicitudes y su revisión para que la escuela pueda seguir cada proceso con menos coordinación manual.", points: ["Solicitudes y revisión", "Responsabilidades claras", "Procesos propios de la escuela"] },
      { id: "roles", name: "Roles", headline: "Un lugar para todos. El acceso correcto.", description: "Estudiantes, familias, docentes y equipos escolares necesitan información distinta. NUVRA contempla esas diferencias.", points: ["Acceso por rol", "Vistas según cada necesidad", "Responsabilidades definidas por la escuela"] },
      { id: "workflows", name: "Flujos", headline: "Espacio para su forma de trabajar.", description: "Conectamos las tareas administrativas alrededor de las rutinas que la escuela ya conoce.", points: ["Coordinación administrativa", "Rutinas escolares conectadas", "Posibilidad de crear nuevos módulos"] },
    ] satisfies SchoolModule[],
    product: { label: "EL SOFTWARE", title: ["Menos disperso.", "Más conectado."], description: "Estos módulos ya existen en NUVRA. Los adaptamos con cada escuela y construimos otros cuando aparece una necesidad real.", detail: "Explorar un módulo", example: "Vista de ejemplo", selected: "Módulo seleccionado" },
    school: {
      label: "DONDE EMPEZÓ TODO", title: ["La primera escuela.", "Nuestra escuela."],
      intro: "NUVRA nació como un proyecto escolar en la E.E.S.T. N.º 1 Manuel Belgrano. Estudiamos ahí. Sabemos lo que pasa cuando un mensaje se pierde o una tarea simple necesita tres planillas distintas.",
      body: "Hoy hay una demo funcionando. Algunos cursos y otros usuarios de la escuela están probando partes del sistema. La escuela está evaluando incorporarlo al día a día el próximo año.",
      closing: "Queremos que sea la primera de muchas escuelas con las que construyamos.",
      schoolType: "ESCUELA SECUNDARIA TÉCNICA", schoolName: "Manuel Belgrano", schoolNumber: "E.E.S.T. N.º 1", location: "Santos Lugares, Buenos Aires", relationship: "Donde estudiamos. Donde nació NUVRA.",
      facts: ["Demo funcionando", "Pruebas con cursos y usuarios", "Uso cotidiano en evaluación"],
    },
    approach: {
      label: "PENSADO PARA CADA INSTITUCIÓN", title: ["TU", "ESCUELA.", "A TU MANERA."],
      text: "Su identidad, sus personas, sus rutinas. Trabajamos con cada institución para adaptar NUVRA a su forma de funcionar.",
      points: ["Su propia identidad visual", "Módulos según sus necesidades", "Flujos diseñados con su equipo"],
      sample: "Un sistema. Su identidad.", choose: "Probá una identidad de ejemplo", identity: "Tu escuela", note: "Una pequeña muestra de lo que puede cambiar. Personalizar va mucho más allá del color.",
      themes: ["Bosque", "Cobalto", "Arcilla"],
    },
    team: { label: "QUIÉNES HACEMOS NUVRA", title: ["Empieza con nosotros."], text: "Cinco estudiantes de Buenos Aires convirtiendo un proyecto escolar en una empresa. Construimos, escuchamos y lo mejoramos con quienes lo usan.", people, roles: ["Fundador / Líder técnico", "Co-fundador", "Primer equipo", "Primer equipo", "Primer equipo"] },
    contact: { label: "CONSTRUYAMOS JUNTOS", title: ["¿Qué necesita", "tu escuela?"], text: "Contanos cómo trabaja tu escuela y qué podría funcionar mejor. Nos gustaría escucharlo.", cta: "Hablá con los fundadores", email: "founders@nuvraacademy.com.ar" },
    ui: { school: "Tu escuela", example: "Vista ilustrativa", course: "Curso", today: "Hoy", attendance: "Asistencia", present: "Presente", absent: "Ausente", student: "Estudiante", family: "Familias", teachers: "Docentes", staff: "Equipo escolar", students: "Estudiantes", message: "Comunicado escolar", messageTitle: "Un mensaje que llega a casa.", messageText: "La escuela y las familias, compartiendo la misma información.", sent: "Escuela → Familias", records: "Registros de estudiantes", profile: "Información escolar", report: "Resumen del curso", reportSub: "Información para el equipo escolar", request: "Solicitud de permiso", review: "En revisión", approved: "Revisado", sentRequest: "Solicitud recibida", access: "Acceso por rol", workflow: "Una rutina compartida", task: "Tarea administrativa", assigned: "Revisión del equipo", finished: "Lista para seguimiento", morning: "Espacio escolar", greeting: "Todo para el día de tu escuela.", quick: "Tus módulos", previewNote: "Datos de ejemplo" },
    footer: "Software para escuelas. Construido desde adentro.", back: "Volver al inicio",
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Language];
