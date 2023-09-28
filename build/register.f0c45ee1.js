// beware! horrid code lies below
function validateField(value, schema) {
    console.log(value, schema);
    if (schema.type === "string") {
        if (schema.minLength && value?.length < schema.minLength) return `must contain at least ${schema.minLength} characters`;
        if (schema.pattern && !schema.pattern.test(value)) return "has invalid data type.";
        if (schema.enum) return !schema.enum.includes(value) ? `must be equal to one of: ${schema.enum.join()}` : "";
        if (schema.length) return value?.length !== schema.length ? `length must be equal to ${schema.length} characters` : "";
    }
    if (schema.type === "email") {
        // You can implement email validation here
        // For a basic check, you can use a regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    }
    return undefined;
}
function registerValidate(data) {
    const schema = {
        "first-name": {
            type: "string",
            minLength: 3,
            pattern: /^[a-zA-Z\s]*$/
        },
        "last-name": {
            type: "string",
            minLength: 3,
            pattern: /^[a-zA-Z\s]*$/
        },
        username: {
            type: "string",
            minLength: 3,
            pattern: /^[a-zA-Z0-9]*$/
        },
        gender: {
            type: "string",
            enum: [
                "male",
                "female",
                "other",
                "prefer_not_to_say"
            ]
        },
        "birth-date": {
            type: "string",
            length: 10,
            pattern: /^\d\d\/\d\d\/\d\d\d\d$/
        },
        email: {
            type: "string",
            format: "email"
        }
    };
    let errors = 0;
    Object.keys(schema).forEach((field)=>{
        const fieldSchema = schema[field];
        console.log(data[field]);
        const { field: { value }, helper } = data[field];
        console.log(value);
        helper.innerText = "";
        helper.className = "";
        if (!value) {
            helper.innerText = "this field is required";
            helper.className = "form-helper-text danger";
            errors += 1;
            return;
        }
        const vf = validateField(value, fieldSchema);
        if (vf) {
            helper.innerText = vf;
            helper.className = "form-helper-text danger";
            errors += 1;
        }
    });
    return !!errors;
}
if (typeof window !== "undefined") window.registerValidate = registerValidate;

//# sourceMappingURL=register.f0c45ee1.js.map
