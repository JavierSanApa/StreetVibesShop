// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Create custom theme
var myTheme = am5.Theme.new(root);
myTheme.rule("Label").set("fontSize", 10);
myTheme.rule("Grid").set("strokeOpacity", 0.06);

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root),
  myTheme
]);

var temperatures = {
  "EUROPE": [
    ["Albania", 3.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36, -0.36, -2.26, -2.32, -2.36, -2.41, -2.55, -2.05, -1.49, -1.91, -2.52, -2.03, -1.05, -1.23, -1.23, -1.23, -1.23, -1.23, -1.23, -1.23, -1.23, -1.59, -1.59, -1.59, -1.59, -1.59, -1.59, -1.59, 1.11, 0.96, 0.96, 0.96, 0.96, 0.96, 1.48, -1.71, -1.14, -0.57, -0.84],
    ["Austria", 6.9, -0.33, 0.18, 0.36, -0.05, 0.42, -0.55, -0.13, -0.84, -0.14, 0.38, 0.72, -0.47, -0.27, 0.03, -0.17, 0.57, 0.94, 0.88, -0.02, 1.49, 0.82, 2.08, 0.75, -0.26, 0.95, 1.03, 1.05, 1.85, -0.87, 0.43, 0.26, -0.62, -0.83, -0.08, -0.1, 0.62, 0.58, -0.39, 0.53, 0.22, 0.27, 0.86, 0.89, 0.75],
    ["Belgium", 10.32, -0.07, 0.23, 0.15, 0.73, 0.11, -0.5, -0.88, -0.64, -0.29, 0.67, 0.49, -0.27, -0.82, -0.62, -0.82, 0.49, 1.08, 0.99, -0.15, 0.56, -0.07, 0.91, 0.98, -0.92, 0.65, 0.38, 0.94, 1.72, 1.53, 1.93, 2.29, 1.94, 2.53, 1.74, 2.07, 1.78, 1.76, 1.18, 2.93, 2.29, 0.92, 2.63, -5.37, -4.61],
    ["Bulgaria", 12.03, 0.06, -0.12, 0.48, -0.58, 0.07, -0.65, 0.41, -0.46, 0.29, 0.45, 0.06, 0.28, 0.24, -2.82, 0.31, 0.23, 0.78, 1.49, -3.23, -0.55, -4.72, -0.57, -1.77, -1.77, -1.77, -3.13, 0.55, 0.57, 1.21, -0.43, -2.21, -1.56, -1.45, -1.08, -0.05, -1.34, 0.13, -0.81, -0.93, -1.67, -0.77, -1.06, -0.51, 0.14],
    ["Croatia", 13.8, -0.07, 0.21, 0.34, -0.54, 0.45, -0.87, 0.22, -0.82, 0.03, 0.52, 0.52, -0.39, -0.12, 0.06, 0.03, 0.48, 0.48, 0.87, -0.12, 1.07, 0.61, 1.73, 0.32, -3.32, -3.18, -3.32, -0.28, 0.84, -0.39, 0.58, 0.68, -0.33, -0.62, 0.41, 1.01, 0.77, 0.89, -0.13, 0.79, 1.12, 0.51, 1.13, -0.22, -2.08],
    ["Czech Republic", 8.12, -0.46, 0.11, 0.36, -0.32, 0.44, 0.01, -0.42, -1.58, -0.24, 0.96, 1.1, -0.68, -0.81, -0.2, -1.09, 0.97, 1.34, 1.34, -0.18, 1.17, 0.26, 1.47, 0.54, -1.14, 0.41, 0.86, 1.32, 2.06, 0.52, 1.41, 1.68, 1.46, 0.61, 2.04, 1.96, 1.84, 1.95, 0.62, 1.54, 1.77, 1.11, 2.63, -3.79, 2.48],
    ["Denmark", 7.89, 0.48, 0.31, 0.68, 0.06, -0.47, -0.04, -0.97, -0.21, -0.19, 0.36, -0.01, 0.31, -0.82, -0.49, -0.97, 0.36, 0.92, 1.38, 0.5, 0.96, -0.43, 0.19, -0.13, -0.83, 0.61, -0.09, 0.31, 0.78, 0.62, 1.59, 0.41, 0.83, 1.39, 1.49, 1.18, 1.27, 0.83, -0.84, 1.14, 0.46, 0.56, 1.95, 1.49, 1.33],
    ["Estonia", 3.85, -1.07, 1.77, 0.14, -3.82, -2.64, 1.71, 1.66, 1.31, 2.01, 2.64, 3.27, 2.67, 0.26, 1.68, 2.24, 2.5, 3.49, 0.74, -2.3, 2.78, -1.96, 2.73, 3.14, 1.64, 2.57, 2.41, 3.07, 4.03, 4.33, 3.74, 3.27, 3.51, 3.15, 4.32, 3.41, 3.65, 2.55, 1.72, 3.51, 2.08, 3.13, 3.5, 3.78, 3.06],
    ["Finland", 2.29, 0.24, 1.87, 1.67, -1.16, -0.27, -1.27, 0.02, -0.67, -0.96, 0.15, 0.45, 0.74, -2.04, -0.4, -1.84, 0.22, 2.05, 1.31, 0.16, 1.17, 0.14, -0.02, 0.57, -0.11, 0.37, -0.22, 0.62, 1.77, 0.19, 0.32, 0.55, 0.69, 1.33, 1.06, 1.38, 1.57, 0.74, -0.31, 2.03, 0.14, 1.84, 2.01, 2.43, 1.63],
    ["France", 11.96, -0.44, -0.22, -0.02, 0.04, -0.32, 0.05, -0.43, -0.79, -0.09, 0.92, 0.28, -0.27, -0.29, -0.24, 0.16, 0.58, 0.79, 1.21, 0.4, 0.68, 0.03, 1.33, 0.78, -0.22, 0.92, 0.44, 0.91, 0.82, 0.63, 0.64, 1.56, 0.38, 0.48, 1.17, 0.72, 0.31, 0.92, 0.02, 1.44, 0.69, -0.01, 1.33, 1.06, 0.64],
    ["Greece", 16.38, -0.06, -0.19, -0.03, -0.38, 0.69, 0.01, 0.41, -0.06, 0.18, -0.24, -0.32, 0.03, 0.45, 0.14, -0.07, 1.72, -0.04, 0.62, -0.38, -0.06, 0.57, 1.21, 0.53, 0.75, 0.17, 1.53, 1.49, 1.03, 1.88, 0.92, 0.86, 0.53, 0.48, 1.13, 1.56, 1.53, 2.76, 2.05, 0.91, 1.99, -4.31, 3.41, 2.5, 0.07],
    ["Hungary", 10.73, 0.01, 0.32, 0.55, -0.36, -0.43, -0.86, 0.25, -1.2, 0.32, 0.52, 0.89, -0.26, -0.36, 0.34, 0.14, 0.34, 0.79, 0.76, -0.26, 1.31, 0.31, 1.73, 1.5, 1.12, 1.47, 1.29, 1.73, 2.57, 1.35, 2.63, 1.49, 1.01, -0.04, 1.92, 2.99, 2.51, 2.41, 1.79, 2.25, 2.69, 2.59, 2.66, 2.69, 2.43],
    ["Iceland", 3.93, -0.29, 0.96, 0.24, 0.52, 0.05, 0.22, -1.3, -0.35, 0.62, -0.27, -0.37, 0.47, 0.49, 0.18, 1.26, 0.01, 0.06, 0.43, 1.22, 0.44, 0.31, 0.13, -0.16, 0.83, 0.83, 0.32, 0.32, 0.53, 1.03, 1.23, 2.01, 1.59, 0.83, 1.07, 1.82, 1.18, 1.54, 2.03, 0.9, 1.8, 1.17, 2.31, 0.82, 2.37],
    ["Ireland", 10.13, -0.13, -0.49, 0.06, -0.1, 0.45, 0.28, -0.82, -0.16, 0.03, 0.24, 0.32, 0.27, -0.4, -1.04, -0.16, 0.23, 0.73, 0.71, 0.41, 0.37, 0.57, 0.34, 1.02, 0.06, 0.84, 0.67, 0.58, 0.36, 0.28, 0.46, 0.93, 0.64, 0.52, 0.84, 1.23, 0.43, 0.45, -0.33, 0.55, 0.26, 0.29, 0.82, 0.04, 0.65],
    ["Italy", 13.05, 0.19, -0.27, 0.19, -0.63, 0.19, -0.1, -0.08, -0.39, -0.14, 0.53, 0.55, 0.17, 0.29, 0.28, 1.19, 1.04, 0.51, 1.39, 0.62, -0.33, 0.42, 1.34, 0.24, -2.41, 0.47, 0.25, -1.22, 2.13, 2.22, 1.87, 1.93, 1.14, -0.64, 1.51, 1.66, 1.96, 2.14, 1.63, 2.24, 2.47, 1.83, 2.09, 2.22, 2.3],
    ["Latvia", 5.22, -1.89, 0.41, 0.26, -1.89, -2.57, 1.78, 0.89, 0.67, 1.73, 2.54, 2.74, 3.53, -0.72, 1.12, -0.42, 2.13, 1.76, 1.71, 0.07, 1.68, 1.4, -3.59, 0.41, 0.88, 3.05, 1.93, 2.74, 3.23, 3.45, 3.16, 3.53, 2.41, 2.28, 3.13, 2.99, -0.27, 1.96, 1.44, 2.77, 1.44, 2.67, 2.71, 3.09, 2.32],
    ["Lithuania", 6.53, 0.39, 0.7, 1.74, -1.34, -0.22, -0.91, -0.73, -1.28, 0.09, 0.37, 1.19, 0.42, -1.31, -0.23, -1.74, 0.45, 1.82, 1.75, 0.92, 1.25, 0.07, 1.15, 1.16, -0.61, 0.82, 0.63, 1.49, 1.95, 1.51, 2.23, 0.89, 0.61, 0.68, 1.37, 1.86, 2, 0.88, 1.11, 1.78, 0.89, -1.37, 1.08, 3.27, 2.36],
    ["Luxembourg", 8.61, 0.14, 0.27, 0.44, 0.68, 0.09, -0.87, -0.77, -0.89, -0.17, 0.51, 0.57, -0.26, -1.06, -0.55, -0.86, 0.58, 1.17, 1.3, 0.44, 1.08, 0.46, 1.69, 1.19, -0.52, 1.17, 0.75, 1.39, 1.58, 1.09, 1.49, 1.89, 0.84, 1.24, 1.76, 2.02, 1.23, 1.48, 0.2, 2.17, 1.19, 0.57, 2.36, 1.88, -0.59],
    ["Macedonia", 9.52, 3.13, -1.49, 3.38, -1.99, 2.12, 0.52, 1.01, 0.41, 0, -2.85, -7.12, -7.12, -8.64, -3.89, -0.35, 3.15, 1.01, 1.82, 4.11, 1.92, 1.94, 3.92, -2.4, 5.58, 1.5, 0.99, 5.07, 3.43, 3.22, 2.09, 1.69, 2.42, -1.58, 2.67, 2.98, 3.15, 2.82, 2.51, 2.58, 3.47, 2.01, 2.9, 3.17, 3.64],
    ["Malta", 18.86, 0.04, 0.05, 0.11, -0.7, 0.58, -0.13, 0.15, -0.9, -0.22, 0.83, 0.18, -0.67, 0.53, 1.02, 1.82, 1.27, 0.3, 1.04, 0.53, 0.62, 1.27, 1.52, 1.01, 0.41, 0.61, 1.37, 1.37, 0.83, 1.24, 0.29, 1.56, 0.41, 0.86, 1.38, 1.16, 1.48, 1.17, 1.52, 0.36, 1.61, 0.84, 0.78, 1.06, 1.07],
    ["Montenegro", 11.64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7.87, 3.81, 5.06, 3.64, 3.76, 3.07, 0.81, -0.96, 2.31, -0.12, 6.41, 4.34, 5.31, 5.88, 6.6, 5.88, 6.04, 5.98, 6.42, 5.89, 7.04, 6.56, 6.37, 6.68, -1.12, 9.91],
    ["Netherlands", 9.49, -0.24, 0.06, -0.03, 0.31, 0.02, -0.27, -0.98, -0.44, -0.09, 0.79, 0.87, -0.02, -0.46, -0.65, -0.49, 1.02, 1.43, 1.17, 0.01, 0.89, 0.18, 1.29, 1.11, -0.88, 0.8, 0.89, 1.81, 1.36, 1.25, 1.42, 1.27, 0.99, 1.58, 2.42, 1.82, 1.2, 1.21, -0.16, 1.42, 0.84, 0.52, 2.31, 1.43, 1.34],
    ["Norway", 3.73, 0.82, 1.53, 0.01, 0.16, -0.23, -0.53, -0.72, -0.7, 0.04, 0.33, -0.67, 0.96, -1.09, -0.43, -0.71, -0.01, 0.98, 1.48, 0.76, 0.86, 0.09, 0.13, 0.08, -0.22, -0.16, 0.56, 1.16, 1.47, 0.69, 1.38, 0.77, 1.38, 1.19, 1.42, 1.17, 1.11, 1.01, -0.53, 1.8, 0.59, 1.09, 2.02, 1.65, 1.53],
    ["Poland", 8.64, 0.89, 0.77, 1.59, -0.71, -0.42, -0.37, -0.89, -1.73, 0.14, -0.06, 0.49, -0.18, -0.63, 0.34, -1.34, 0.82, 1.9, 1.4, 0.42, -0.89, 0.21, 1.07, 0.76, -1.04, 0.33, 0.42, 1.22, 1.52, 0.42, 1.67, 0.82, 0.41, 0.73, 0.93, 1.74, 1.54, 0.46, -1.14, 0.64, 0.22, -0.07, 1.16, 0.87, 1.39],
    ["Russia", 0.51, 0.51, -0.63, 1.69, -1.09, -0.62, -0.16, -0.33, -0.8, 0.69, 0.06, 0.7, -0.47, -0.67, -0.14, -0.92, 0.5, 0.53, 1.01, 0.45, 0.26, 0.13, -0.03, 1.58, -0.29, 0.5, 0.02, 0.17, 0.01, 0.48, 0.74, 0.81, 0.46, 0.77, -0.14, 1.57, 1.27, 0.27, 0.33, 0.89, 1.51, -2.22, -2.98, 2.25, 0.13],
    ["Serbia", 11.68, -0.24, 0.31, 0.48, -0.64, 0.54, -0.72, 0.39, -1.03, 0.09, 0.29, 0.52, -0.28, -0.59, -0.06, -0.11, 0.34, 0.57, 1.07, -0.49, 0.95, 0.31, 1.76, 0.52, -0.26, -0.18, 0.67, 0.88, 2.08, 0.97, 1.7, 0.88, 0.63, -0.07, 0.84, 1.97, 2.05, 1.59, 2.09, 1.91, 2.24, 2.45, 2.39, 2.69, 2.16],
    ["Slovakia", 9.7, -0.11, 0.61, 0.93, 0.04, -0.31, -1.03, -0.02, -1.34, -0.14, 0.61, 0.76, -0.22, -0.78, -0.34, -0.64, -0.08, 0.73, 0.82, -0.45, 0.98, 0.04, 1.67, 0.68, -0.57, 0.01, 0.82, 0.93, 1.73, 0.61, 1.36, 0.72, 0.4, 0.13, 0.92, 1.71, 1.83, 1.39, 0.81, 1.43, 1.71, 1.62, 3.01, 2.31, 2.74],
    ["Spain", 17.29, -1.64, -1.48, -0.84, -0.82, 0.54, 0.69, 0.78, 0.34, 0.78, 0.43, 0.18, -0.78, 0.17, -0.61, 0.02, -0.27, 1.15, 0.42, -0.21, -0.16, -1.08, 0.55, 0.64, -0.39, 1.33, 0.22, 0.07, 0.11, 0.46, 0.38, 1.07, 0.64, 1.36, 1.51, -0.62, -0.89, 0.75, 0.57, 0.73, 0.34, 0.38, 1.37, 0.64, 1.74],
    ["Sweden", 5.67, 0.84, 1.23, 1.9, -0.27, 0.33, -0.72, -1.16, -1.03, -0.88, 0.01, 0.36, 0.41, -1.97, -0.76, -1.9, 0.09, 1.21, 1.43, 0.27, 1.01, -0.27, 0.06, -1.02, -0.46, 1.06, 0.29, 1.09, 1.73, 0.59, 1.48, 0.82, 0.86, 1.22, 1.43, 1.2, 0.38, 0.13, -1.55, 0.85, 0.11, 0.42, 1.59, 1.42, -0.29],
    ["Switzerland", 9.73, -0.3, 0.37, 0.16, 0.27, 0.45, -0.75, -0.15, -0.68, -0.25, 0.46, 0.43, -0.44, -0.74, -0.46, -0.5, 0.55, 0.73, 1.02, 0.01, 0.64, 0.26, 1.59, 0.44, -0.64, 0.67, 0.73, 0.85, 1.63, 0.74, 1.33, 1.41, 0.54, 0.39, 0.96, 1.24, 0.76, 1.08, -0.13, 1.65, 0.86, 0.21, 1.81, 1.7, 0.34],
    ["Ukraine", 9.15, -0.48, -0.05, 1.22, -1.58, -0.08, 0.13, 0.24, -1.24, 0.78, 0.19, 0.9, -0.18, -1.37, -0.15, -1.77, -0.3, 1.33, 1.12, 0.24, 0.55, -0.83, 0.64, 0.54, -0.48, -0.33, 0.51, 1.61, 0.91, 0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
  ],
  "AFRICA": [
    ["Algeria", 16.99, 0.55, 0.09, 0.44, -4.27, 0.58, 0.28, 0.93, 0.58, -0.5, 2.37, -1.47, 1.45, 1.74, 1.34, 2.07, 0.91, 0.61, 1.84, 0.71, 0.54, 0.36, 2.18, 2.28, 1.93, 4.09, 1.03, 1.77, 1.32, 2.72, 1.51, 2.68, 1.43, 1.82, 2.62, 1.64, 1.72, 3.03, 1.88, 2.16, 2.45, -0.54, 3.03, 1.52, 3.32],
    ["Angola", 23.86, 1.64, 0.58, -0.54, 0.37, 0.96, 0.56, 0.56, 0.56, -1.61, -1.94, -1.94, -1.94, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, 0.86, 1.81, 0.79, 0.18, 0.64, 1.38, 1.98, 0.65, 0.65, 0.09, 3.67, 5.14, 5.14, 2.62, 1.91, 2.57],
    ["Botswana", 21.64, 0.33, -1.11, -0.36, -0.7, -0.1, -0.26, 0.24, -0.92, -0.77, 0.58, 0.88, 0.68, 0.33, -1.9, 1.8, 1.41, 0.3, 2.82, 0.84, 0.3, 0.98, 1.19, 2.32, 1.36, 1.64, 1.68, 2.41, 0.34, 1.46, 2.44, 1.63, 0.87, 2.18, 0.41, 0.84, 0.64, 0.58, 1.6, 0.89, 0.87, 0.83, 0.24, 1.09, 2.2],
    ["Cameroon", 24.36, 0.16, -0.32, -0.6, -0.31, 0.01, 0.09, 0.22, 0.18, 0.27, -0.07, 0.36, 0.03, 0.18, 0.33, 0.76, 0.43, 0.11, 0.96, 1.1, -0.1, 0.38, 0.14, 0.46, 0.32, 0.98, 1.14, 0.5, 0.42, 0.33, 1.02, 0.57, 1.56, 1.14, -1.78, 0.84, 0.47, 0.71, 3.01, -0.46, 0.62, 0.93, 0.3, 0.55, 0.96],
    ["Chad", 27.71, 1.17, 0.16, 0.16, 0.36, 0.18, 0.12, -2.14, -2.14, -2.14, -2.14, -2.14, -2.14, -2.14, -2.14, -0.52, 0.86, -0.09, 1.26, 1.18, -0.27, 0.74, 1.43, 0.42, 0.04, 0.97, -0.09, -1.44, 0.37, 0.95, 1.15, 1.21, 1.41, 0.42, 1.9, 1.14, 0.13, 1.52, 1.98, 1.16, 0.87, 1.77, 1.53, 0.86, 1.33],
    ["Congo", 25.22, 0.17, -0.28, -0.45, -0.31, 0.13, 0.07, 0.21, 0.12, 0.14, -0.31, 0.5, 0.54, 0.11, 0.24, 0.66, 0.63, 0.51, -0.1, 0.26, -0.64, -0.14, 0.56, 0.81, 0.32, 1.27, 1.34, 0.74, 0.16, 0.49, 1.54, 1.67, 0.73, 1.14, 0.57, 0.95, 0.96, 1.13, 1.28, 0.91, 1.2, 0.89, 0.79, 1.12, 1.37],
    ["Egypt", 22.71, -0.54, -0.06, -0.88, 0.35, -0.27, 2.35, 0.56, -0.34, 0.74, -0.34, -0.55, -0.19, 1.07, -1.12, -0.37, -0.2, -0.16, -0.59, -0.19, -0.85, -0.44, 0.79, -0.03, 0.46, -0.87, 0.68, 1.25, -1.59, 0.1, 0.23, 0.72, 0.71, -0.01, 0.91, 0.68, 0.93, 0.79, 2.17, 0.14, 0.57, -0.01, 1.56, 1.43, 1.1],
    ["Ethiopia", 19.63, 0.43, -0.53, -0.37, -0.21, -0.04, -0.12, -0.07, 0.41, -0.18, 0.28, 0.42, -0.16, -0.72, 0.11, 0.59, 0.45, -1.68, 0.52, 0.86, 0.96, 1.11, -0.24, 0.79, 0.31, 0.8, 0.73, 0.86, 1.22, 0.17, 4.5, 4.5, 4.5, -5.07, 0.97, -1.89, -2.05, 1.61, 1.18, 2.43, 1.51, 1.88, 1.49, 1.84, 1.54],
    ["Ghana", 26.71, -0.01, -1.01, -0.19, -0.91, 0.42, 0.07, 0.22, 1.24, 0.74, -2.58, -2.58, -2.58, -2.58, 0.01, 1.98, -0.77, -0.39, 0.21, 0.54, 0.48, 0.11, 0.94, 1.69, -0.23, 0.44, 1.02, 0.97, 0.15, 2.47, 1.91, 0.78, 1.11, 0.8, 1.92, 1.58, 0.65, 0.87, 1.23, 0.7, 0.88, 1.52, 0.19, 0.84, 1.36],
    ["Kenya", 23.06, -2.26, -0.79, -0.14, 0.35, 0.21, 0.08, 0.27, 0.46, 0.28, 0.5, 0.48, 0.23, 0.14, 0.27, 0.77, 0.74, 0.13, 0.31, 0.39, 0.44, 0.06, 0.43, 0.47, 0.36, 0.63, 1.03, 0.38, 0.67, 0.54, 0.87, 0.83, 0.92, 0.98, 0.99, 0.91, 0.83, 1.23, 1.19, 1.18, 0.93, 0.94, 1.07, 1.44, 1.24],
    ["Libya", 21.54, -0.77, 0.08, 1.01, -0.04, -0.41, 0.47, 1.54, -0.86, 0.23, 0.2, -1.32, -0.53, 0.28, -1.55, -0.13, 0.63, 0.08, 0.32, -0.83, -0.55, 0.52, -0.47, 0.26, 1.73, 0.42, 0.98, 0.55, -0.17, 0.49, -1.42, 0.04, 2.46, 1.01, 0.23, 0.75, 0.72, 0.57, 1.13, -7.21, 3.03, 1.2, -1.33, 1.39, -0.68],
    ["Madagascar", 24.01, 0.71, -0.82, -0.57, 0.35, 0.91, -0.26, -0.07, -0.72, 0.14, -0.01, 0.51, -0.28, 0.37, 0.04, 0.6, 0.46, 0.12, 0.51, 0.04, -0.72, -0.28, 0.37, 0.7, 0.26, 0.66, 0.87, 0.59, 0.62, 0.53, 0.75, 0.81, 0.97, 0.48, 0.88, 0.73, 0.33, 0.07, 1.13, 1.34, 0.73, 0.78, 0.76, 0.69, 0.68],
    ["Mali", 28.39, -0.03, -0.84, -0.41, -0.39, 0.07, 0.01, 0.14, 1.04, 0.33, -0.34, 0.22, 0.78, -0.44, -0.98, 0.7, -0.48, 0.5, 0.83, 1.09, 0.19, 0.55, -0.06, 0.56, 0.36, 0.91, 1.13, 0.83, 0.37, 0.82, 1.89, 0.88, 1.33, 1.09, 0.76, 1.44, 0.48, 0.73, 1.58, 1.43, 0.86, 0.37, 0.56, 1.22, 1.26],
    ["Mauritania", 27.57, -0.18, -1.05, -0.61, -1.07, 0.14, -0.21, 0.44, 0, 0.72, 0.07, 1.24, 0.17, 0.32, -0.48, 1.36, 0.54, 0.31, 0.58, -0.08, 0.56, 0.26, -0.91, 0.17, 0.84, -0.02, 1.15, -1.02, 0.4, 0.44, 0.48, 0.86, 0.78, 0.22, 1.12, -1.03, 1.56, 1.13, 2.14, 1.52, 0.51, 1.93, 0.71, 1.43, 1.63],
    ["Morocco", 17.58, -0.47, -0.62, -0.29, -0.57, -0.4, -0.08, 0.72, 0.55, 0.29, 0.22, 0.64, 0.21, 0.58, 0.55, 1.36, 0.45, 0.62, 0.89, -0.09, 0.11, -0.12, 0.63, 1.44, 0.93, 1.54, 1.39, 0.87, 1.17, 1.57, 1.21, 1.47, 1.36, 1.41, 1.99, 1.03, 1.02, 2.15, 2.06, 1.76, 1.55, 1.08, 1.42, 1.35, 1.97],
    ["Mozambique", 23.62, 0.02, -0.46, -0.59, 0.22, 0.17, 0.22, 0.22, 0.07, -0.29, -0.17, 0.64, 0.25, 0, -0.08, 0.38, 0.16, 0.56, 0.31, 0.46, 0.86, 0.41, -0.3, 0.95, 0.63, -0.31, 0.49, -0.23, 1.36, 0.33, 0.49, 0.92, 0.94, 1.18, 0.65, 1.53, 0.97, 0.79, 1.86, 3.11, 0.17, -0.58, 0.23, 1.09, 1.44],
    ["Namibia", 20.84, -0.18, -1.9, -0.91, -1.88, -0.71, -1.07, -0.24, 0.61, -0.33, 1.13, 0.71, 1.62, 0.12, -0.29, 0.68, 0.63, -0.36, 0.41, -1.41, 0.67, 0.4, 0.44, 0.28, 0.43, 0.24, 1.04, 0.64, 0.56, 0.01, 1.26, 1.96, 1.12, 1.05, -0.09, -0.25, 1.42, 0.59, 1.02, -0.66, 0.66, 1.24, 0.87, 2.64, 1.88],
    ["Niger", 28.41, 0.65, -0.49, -0.29, 0, -0.57, 0.04, 0.36, -0.38, -0.07, 0.53, 0.19, -0.16, 0.28, 0.37, 0.46, -0.12, -0.73, 0.78, -0.48, -0.09, 0.5, -0.7, 0.21, 0.33, -0.44, 1.65, -1.01, -0.82, 0.14, 0.97, 0.48, 0.77, 1.44, 1.45, 0.61, 0.17, 1.22, 1.31, 1.02, 0.66, 1.23, 0.94, 0.71, 1.27],
    ["Nigeria", 26.35, 0, -0.73, -0.05, 1.29, 0.65, -1.35, -0.55, 0.22, 0.15, 0.15, 0.15, 0.15, 0.15, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 1.52, 0.73, 1.87, 0.66, 0.19, 0.51, 0.37, 1.01, -0.05, 1.91, 0.23, 1.36, 1.59, 1.55, 0.74, 1.38, 1.72, 1.46, 1.53],
    ["South Africa", 17.03, -0.29, -0.54, 0.45, -0.05, 0.03, -0.53, -0.21, 0.31, -0.73, -0.19, 0.74, 0.79, 1.51, 0.36, 0.96, 0.35, 0.44, 2.13, -0.26, 1.02, 1.31, 0.47, 1.36, 0.42, 0.02, 0.5, 1.83, 0.71, 0.31, 1.28, 1.45, 1.57, 1.11, 1.08, 0.51, 0.58, 0.86, 1.29, 0.56, 1.16, 1.59, 0.97, 1.63, 1.73],
    ["Tanzania", 24.09, -0.58, -0.93, 0.12, 0.28, 0.41, -0.58, -0.18, 0.26, 0.21, 0.56, 0.19, -0.41, -0.59, -0.18, 0.25, 0.34, 0.16, -0.52, 0.19, -0.39, -0.39, 1.93, 1.99, 2.96, 1.89, 1.93, 2.42, -0.16, -0.79, 0.53, 1.06, 0.57, 1.11, 1.01, 0.79, 0.12, 0.72, 1.02, 0.57, 0.62, 0.44, 0.38, 0.43, 0.51],
    ["Tunisia", 18.81, 0.07, -0.68, -0.31, -0.92, 0.28, -0.22, 0.15, -0.46, 0.21, 1.46, 0.41, -0.21, 0.51, 0.76, 1.13, 1.01, 0.34, 1.02, -0.38, 0, 0.53, 1.86, 1.1, 0.74, 1.48, 1.14, 2.43, 1.64, 2.48, 1.56, 2.47, 0.9, 2.38, 2.1, 1.86, 2.04, 2.08, 1.82, 1.6, 2.61, 1.71, 2.36, 2.29, 2.36],
    ["Zambia", 21.76, 3.24, -3.41, 1.78, -0.2, -0.06, -3.73, 1.24, -1.18, -1.47, 1.4, 2.4, 0.78, 0.65, -0.65, 1.28, 0.35, -0.7, 0.44, -0.51, -0.28, -3.03, 0.08, 0.25, 1.94, -2.09, 4.19, 1.19, -1.39, 2.88, 1.77, 0.54, -0.14, 3.77, -1.06, 1.69, 0.24, 0.72, 2.36, 3.51, 0.63, 1.03, 1.08, 1.81, 4.54],
    ["Zimbabwe", 19.03, 0.15, -0.56, -0.41, -0.39, 0.21, -0.18, 0.06, -0.16, -0.31, 0.27, 1.32, 0.43, -0.03, 0.14, 1.04, 0.21, 0.07, 0.68, 0.45, 0.91, -0.18, 0.3, 0.87, 0.12, -0.25, 0.61, -0.42, -0.36, 0.39, 0.77, 0.48, 0.37, 1.07, 0.32, 0.42, 0.94, 0.47, 0.61, 1.61, 0.34, 0.2, 0.56, 0.7, 1.42]
  ],
  "AMERICA": [
    ["Argentina", 17.19, -1.68, -0.6, -0.49, 0.73, -0.41, 1.13, -0.53, -0.19, -0.29, 2.62, -0.62, -1.66, -1.17, -0.91, -0.73, -0.47, -0.09, -0.35, -0.64, -0.86, -0.61, -0.07, -0.58, -0.39, -0.38, 0.16, -0.42, -0.87, 0.25, -0.21, -0.17, 0.33, -0.01, 0.19, -0.3, -0.05, 0.65, 0.06, 0.22, 0.66, 0.29, 0.31, 0.27, -0.53],
    ["Belize", 26.31, -0.53, -0.4, -1.28, 0.14, -0.47, -0.68, 0.87, 0.77, 0.36, 0.42, 0.79, -0.91, 0.84, 0.56, 0.09, 0.58, 0.11, 0.38, 0.38, 0.34, 0.21, 0.61, -1.36, 0.67, 1.13, 1.12, -0.09, 0.11, 0.58, 0.94, 0.92, 0.5, 1.14, 0.84, 0.98, 0.68, 0.78, 0.75, 0.68, 0.47, 0.95, 0.66, 1.19, 1.23],
    ["Bolivia", 21.84, -2.32, -1.07, -1.07, 2.28, -0.61, -0.92, -0.14, -0.33, 0.57, 1.18, -0.22, 0.23, -0.44, 0.34, 1.07, 0.34, 0.12, 0.38, 0.59, -0.09, 0.57, 1.07, 1.14, 0.43, 0.42, -0.82, -0.23, 0.39, 0.92, 1.49, 1.04, 0.86, 1.04, 1.27, 0.69, 0.81, 1.79, 0.84, 0.53, 2.75, 2.11, 1.52, 1.68, 2.01],
    ["Brazil", 25.75, 0.43, -1.64, -0.21, 0.72, 0.73, 0.14, -1.11, 0.01, -0.41, 1.15, 0.39, 0.25, 0.32, 0.75, 0.36, 0.23, 0.35, 0.55, 0.37, 0.59, 0.57, 0.58, 0.99, 0.53, 0.29, 0.46, 0.64, 0.68, 0.73, 0.37, 0.23, -1.12, 0.39, -0.63, 0.44, -0.03, -0.18, 0.34, 0.26, 0.16, 0.68, -1.71, -2.25, -0.23],
    ["Canada", 3.37, 0.29, -0.05, -0.65, 0.04, 0.34, -0.82, -0.21, -0.02, 1.24, -0.92, 0.62, 0.31, -0.33, 0.53, 1.84, 1.11, 0.46, 0.9, 1.21, -1.33, 0.51, 0.06, 0.03, -0.78, 0.31, 1.57, 0.73, -0.14, 0.72, -0.45, 0.08, -0.28, 0.54, 1.04, 0.12, -0.32, -0.44, 1.03, 0.04, 0.63, -0.19, -0.31, 0.67, 1.03],
    ["Chile", 13.37, -0.54, -0.44, -0.69, -0.35, 0.34, 0.05, 0.03, 0.25, 0.26, 0.32, 1.14, 0.56, 1.92, 0.5, 1, 0.74, 0.94, 0.98, 0.66, 1.19, 0.61, 0.67, 0.29, 0.42, 1.16, 1.33, 0.04, -0.37, 1.08, 0.61, 1.05, 1.53, 2.13, 2.56, 1.22, 2.06, 2.06, 1.2, 1.04, 1.56, 1.28, 1, 1.74, 1.76],
    ["Colombia", 25.89, 1.04, -0.03, -0.28, 0.24, -0.21, -0.36, -0.21, -0.1, -0.25, -0.35, 0.51, -0.73, -0.62, -0.81, -0.47, -0.56, -2.44, -0.48, -0.48, -0.32, -0.31, -0.43, -0.36, -0.51, 0.08, 0.26, -1.09, -1.03, -0.31, -0.26, -0.03, -0.45, 0.01, -0.58, -0.48, -0.66, -3.99, 0.06, -0.17, 0.12, 0.27, 0.42, 0.83, 0.62],
    ["Costa Rica", 24.8, 1.47, 0.89, 0.9, -0.58, -0.42, -0.34, -0.36, -0.12, -0.33, 0.05, 0.49, 0.22, 0.3, 0.32, 1.06, 0.5, 0.24, 0.61, 0.83, 0.6, 0.6, 0.67, 0.72, 0.41, 1.18, 1.19, 0.17, 0.59, 0.98, 1.02, 1.07, 0.72, 0.55, 0.73, 0.86, 0.63, 1.16, 1.12, 0.46, 0.79, 1.07, 1.21, 1.51, 1.16],
    ["Cuba", 26.64, -0.24, -0.6, -0.09, -0.64, -0.15, -0.45, 0.06, 0.28, 0.23, 0.38, 1.22, 0.84, 0.93, 0.91, 1.6, 1.46, 1.12, 1.52, 1.54, 1.16, 0.77, 1.41, 0.83, 0.06, 0.37, 0.42, -0.55, -0.65, -0.02, 0.12, 0.44, -0.29, -0.22, 0.02, 0, -0.28, 0.12, 0.07, -0.27, -0.12, -0.73, 0.67, 1.81, 1.19],
    ["Greenland", -5.08, -1.37, -2.73, -3.02, 1.58, 1.73, 1.53, 2.04, 2.67, 0.01, 0.05, -1.31, -0.49, 1.59, 0.69, 0.12, 1.03, -0.87, 0.25, 0.48, 0.34, 0, 0.62, 1.76, 2.58, 2.03, 1.88, 0.06, 1.74, 1.63, 1.44, 2.53, 1.86, 2.32, 1.66, 1.71, 1.52, 1.59, 2.81, 1.11, 0.68, 0.88, 1.44, 1.14, 2.75],
    ["Jamaica", 26.98, 0.33, -0.43, -0.37, -0.11, 0.34, 0.04, -0.25, 0.12, -0.02, -0.08, 0.42, -0.17, -0.21, -0.06, 0.55, 0.44, 0.24, 0.43, 0.49, 0.64, 0.75, 0.85, 0.94, 0.62, 1.11, 1.19, 0.59, 0.57, 0.86, 0.97, 1.02, 0.93, 1.04, 0.94, 0.91, 0.21, 1.16, 0.84, 0.31, 0.97, 1.14, 1.31, 1.41, 1.32],
    ["Mexico", 21.24, -0.5, 1.04, 0.06, -1.08, -0.12, 0.12, -0.27, 0.08, 0.27, -0.02, 0.03, -0.63, -0.54, -0.48, -0.49, -0.14, 0.78, 0.71, 0.8, 0.58, 0.75, 1.27, 0.88, 1.04, 0.29, 1.94, -1.11, 1.34, 1.16, 1.17, 1.67, 1.24, 1.29, 1.76, 1.39, 1.08, 1.79, 1.17, 1.95, 1.63, 1.6, 1.64, 1.96, 2.07],
    ["Paraguay", 22.78, 1.06, -0.46, -2.44, 0.09, 1.63, -1.56, -1.71, -1.65, 3.02, 1.26, 0.24, -1.73, 2.62, 3.78, -0.06, 1.05, 0.57, 0.31, 1.39, -0.05, 1.49, 1.8, 1.77, 0.87, 2.48, 0.23, 0.5, 0.9, 1.33, 2.05, 1.98, 0.79, 1.88, 2.24, 1.49, 1.16, 1.46, 0.94, 2.02, 2.04, 1.34, 2.11, 1.68, 0.82],
    ["Peru", 20.42, -0.07, -0.42, -0.68, 0.01, -0.09, -0.12, 0.06, 0.16, -0.52, 0.07, 1.72, 0.09, -0.17, 0.18, 0.73, -0.11, 0.22, 0.21, 0.78, 2.39, 0.96, 0.96, 0.88, 0.34, 1.9, 1.99, 0.08, 0.43, 0.25, 0.63, 0.16, 1.17, 0.32, 0.88, -0.21, 0.19, 0.43, 0.48, -0.02, 0.42, 0.49, 1.06, 1.32, 1.43],
    ["Uruguay", 18, -0.42, -0.45, -2.36, -2.33, 3.59, -1.29, -0.57, -0.39, 0.41, 1.18, -0.13, 4.28, -1.37, 1.24, -0.15, -0.38, 0.67, 0.29, 0.54, 0.36, 0.31, 0.56, 0.39, 0.16, 1.86, -0.26, -0.22, 0, 0.49, 0.48, 0.06, 0.64, 0.88, 1.11, -0.77, 1.11, 1.46, 0.19, 0.09, 1.2, 0.59, 0.59, 0.6, -0.76]
  ],
  "ASIA": [
    ["Armenia", 9.14, -2.47, -5.54, 2.91, -9.13, -3.98, 1.3, 1.79, 4.56, 2.72, -0.64, -6.61, -2.99, -0.93, -1.88, -1.64, -2.48, 0.19, -0.03, 0.23, -5.73, -5.01, -3.64, -3.24, -3.11, -3.73, -3.69, -4.82, -7.09, -6.27, -6.48, -3.68, -0.06, -7.24, -1.48, -1.65, -3.22, -3.04, -0.34, -3.41, -1.92, -2.47, -4.29, 0.52, 0.26],
    ["Bangladesh", 24.84, 0, 0, 0, 0, -0.34, 2.28, 0.68, -0.08, -1.43, -0.16, 0.02, 0.08, 0.75, 0.44, 0.3, 0.23, 0.57, 0.71, 0.72, 1.05, 0.69, 0.39, 0.72, -0.07, -4.22, 2.03, 2.57, 0.93, 3.94, 1.04, 4.21, 2.68, 0.63, 1.08, 2.64, 1.63, -0.26, 2.41, 2.42, 3.28, -4.2, 1.99, 1.44, 1.65],
    ["Burma", 25.69, -0.13, 0.29, -0.57, -0.67, 0.08, -0.53, -0.38, 0.47, -0.58, 0.03, 1.46, 0.12, 0.46, 2.83, -0.25, -1.51, -1.79, 0.1, 0.49, -0.76, 0.63, 1.2, 0.84, 1.38, -0.34, 2.09, 1.39, 0.89, 1.02, 1.14, 0.22, 0.67, 1.26, 1.56, 0.99, 0.73, 1.33, 1.45, 0.62, 0.64, 0.94, 1.16, 0.9, 0.44],
    ["China", 9.47, 0.16, -0.31, 0.38, -0.59, -0.11, 0.13, 0.04, -0.24, 0.04, 0.34, 0.18, -0.5, -0.34, -0.13, 0.29, 0.29, 0.42, 0.65, 0.42, 0.18, 0.17, 0.78, 0.59, 0.21, 0.67, 1.46, 1.07, 0.51, 0.88, 1.11, 0.91, 1.01, 0.73, 1.34, 1.47, 0.96, 1.09, 0.88, 0.68, 0.52, 0.01, 1.06, 0.81, -0.18],
    ["Georgia", 12.99, -1.18, -3.01, 0.21, -0.1, 0.41, 0.09, 0.84, 1.76, -0.25, 0.63, -0.78, -5.57, 0.06, -3.45, 1.1, -1.41, -4.07, 0, 1.69, 1.23, -0.86, 5.93, -0.06, 3.27, -1.46, -3.82, 0.44, 0.44, 2.17, 2.08, 0.88, 1.77, 0.89, 0.57, -1.65, -1.06, 0.08, 1.46, -0.01, 0.46, -0.38, 0.72, -0.58, -0.94],
    ["India", 25.69, -0.61, -0.42, -0.46, -0.24, 0.16, 0.42, 1.16, 0.36, 0.06, 0.14, -0.48, 0.33, 0.37, -0.54, 0.39, 0.64, -0.32, -0.61, 0.21, -0.05, 0.23, 0.27, 0.27, 0.35, -0.18, 0.87, 0.46, 0.27, 0.53, 0.75, 0.59, 0.59, -0.07, 1.03, 0.48, 0.47, 0.56, 0.86, 0.7, 0.94, 0.81, 0.86, -1.73, -0.16],
    ["Indonesia", 26.99, 0, 0, 0, -0.58, -0.58, -0.58, 0.09, 0.08, -0.07, -1.54, -0.33, -0.17, -0.23, -0.04, 0.36, 0.18, -0.09, 0.01, 0.06, 0.08, -0.01, -0.07, -0.04, -0.04, -0.03, 0.54, -0.12, -0.05, 0.07, 0.34, 0.4, 0.36, 0.48, 0.24, 0.27, 0.11, 0.44, 0.55, 0.21, 0.34, 0.66, 0.56, 0.58, 0.98],
    ["Iran", 18.84, 0.63, -1.68, 0.51, 0.62, -0.42, 2.31, -1.14, 1.49, -2.98, -4.29, -3.54, -3.54, -3.43, -3.66, -2.66, -2.81, -7.02, 2.66, 0.42, -5.14, -1.31, -3.86, -0.69, -1.86, -3.81, -0.93, -3.07, 0.84, 0.64, 0.53, -5.54, 1.75, -0.71, 0.84, 0.03, 0.79, -0.36, 0.93, 0.11, 0.81, 0.42, 0.77, 1.73, 1.46],
    ["Iraq", 24.27, 0.66, -1.69, -1.54, -0.46, -1.32, 0.49, 1.84, 2.03, 2.03, 2.03, 2.03, 2.03, 2.03, 2.03, 2.03, -10.73, -0.43, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, -7.47, 2.85, 2.85, 2.85, -13.1, 1.82, 2.41, 2.29],
    ["Israel", 19.88, 0.09, -0.09, -0.17, -0.19, -0.01, 0.17, 0.72, 0.22, 0.14, -0.43, -0.46, -0.12, 0.36, 0.03, 0.07, 0.11, -0.02, 0.46, 0.63, -0.05, 1.22, 1.53, 1.05, 1.52, 0.76, 1.9, 1.6, 0.72, 1.45, 1.38, 1.32, 1.11, 1.01, 0.93, 1.25, 2.14, 1.68, 3.17, 1.06, 1.88, 2.01, 1.67, 1.76, 2.42],
    ["Japan", 13.93, 0.16, -0.48, 0.1, -0.41, 0.17, 0.36, 0.68, -0.27, -0.48, 0.11, 0.07, -0.45, 0.18, -0.39, 0.46, -0.11, 0.71, 4.79, 3.9, 2.53, 1.51, 1.77, 0.71, 0.47, 1.06, 1.86, 1.51, 1.3, -0.01, 1.23, 0.91, 1.5, 0.63, 1.39, 1.51, 1.34, 1.4, 2.04, 1.19, 1.19, 1.37, 1.22, 1.67, 1.97],
    ["Kazakhstan", 6.55, 1.08, -2.06, 1.07, -0.53, 0.33, 0.97, 0.25, -1.56, 0.95, -0.45, -0.04, -2.54, -0.24, 0.18, -0.83, 1.68, 1.71, 1.96, 0.79, 0.51, -1.71, -0.03, 1.37, -1.89, 1.54, 0.41, 1.81, 0.36, 1.8, 2.04, 0.49, 2.14, 2.62, 2.18, 2.08, 2.01, 1.14, 1.97, 0.26, 1.11, 2.77, 0.63, 2.2, 2.41],
    ["Korea, South", 9.08, 0.27, -0.55, 0.25, -0.49, 0.42, 0.36, 0.7, -0.72, -0.44, 0.21, -0.01, -1.59, -0.49, -0.76, -0.15, -0.27, 0.51, 0.32, -0.03, 0.39, -0.15, 0.59, -0.21, -0.48, 0.08, 1.37, 1.92, 0.78, 0.65, -0.07, 0.07, 0.79, 0.53, 0.32, 3.63, 0.76, 0.69, 0.42, -0.04, -0.27, 0.02, 1.36, -0.72, 0.59],
    ["Kyrgyzstan", 5.98, 2.12, -3.32, -0.95, -0.74, 0.2, -0.36, 0.72, 0.54, 0.48, 0.13, -0.15, -0.32, 0.49, -0.29, -0.99, 0.03, -0.17, 1.56, 1.09, 0.26, 0.1, 0.88, 0.88, -0.11, 1.8, 3.54, 2.82, 2.64, 1.01, 2.86, 1.84, 2.84, 3.44, 3.84, 3.31, 2.43, 2.25, 2.94, 2.64, 2.29, 2.97, 1.86, 2.92, 3.66],
    ["Laos", 25.89, 0.68, -1.89, 0.11, 0.11, 7.11, 7.11, -1.86, 0.95, 0.56, -0.94, 0.96, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 2.93, 2.93, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 0.61, 1.54, 1.18, 0.69, 1.29, 1, 0.29, 0.86, 1.26, 0.28, 1.56, 1.27, 1.23, 1.59, 1.76],
    ["Lebanon", 18.93, 0.52, -0.37, -0.26, -3.99, 0.69, 1.78, 1.37, -0.04, -1.32, -2.48, 1.7, 1.34, 2.04, 6.72, 8.87, 8.87, 8.87, 8.87, 4.92, 4.38, 2.46, 3.64, 0.26, 0.72, -0.1, 1.33, 0.92, 0.67, 1.16, 0.46, 1.16, -3.93, 0.02, 0.21, 0.28, 1.6, 0.99, 1.74, 0.63, 1.3, 1.32, 1.04, 1.84, 2.37],
    ["Malaysia", 27.4, -0.19, -0.53, -0.49, -0.47, -0.19, 0.04, 0.02, 0.29, 0.03, 0.24, 0.39, -0.34, -0.02, 0.02, 0.28, 0.14, -0.1, 0.26, 0.21, 0.14, 0.07, 0.14, 0.22, 0.14, 0.46, 1.02, 0.17, 0.33, 0.41, 0.64, 0.41, 0.4, 0.39, 0.38, 0.31, 0.13, 0.39, 0.58, 0.35, 0.47, 0.86, -0.42, 0.94, 1.07],
    ["Mongolia", -0.23, 1.04, -1.12, 1.12, -1.46, -1.56, 1.74, 1.64, 0.31, 0.17, 2, -2.59, -1.07, -1.11, -0.17, -0.34, -0.3, 0.68, 0.79, -0.14, -3.86, -0.03, -0.01, 0.48, -0.78, 1.16, 1.52, 1.68, 0.52, 1.12, 1.18, 0.24, 1.14, -0.86, 0.8, 2.32, 1.18, 0.44, 0.2, -0.26, -0.86, 0.41, 0.96, 1.51, 0.51],
    ["Nepal", 17.82, 0.06, 0.08, -0.06, -1.51, -0.32, -0.13, 0.81, 0.04, -0.04, 0.33, 0.78, 0.01, 0.47, 0.12, 0.26, 0.2, 0.43, 0.39, -0.29, 0.16, 1.69, 0.39, 0.39, 2.21, -1.18, 2.93, 2.59, -0.13, -1.07, -0.02, 6.07, 4.28, 0.43, 0.43, 4.98, 5.73, 5.73, 5.73, 5.73, 3.63, -4.62, 2.22, 2.13, 2.67],
    ["Oman", 25.27, 4.23, 4.23, 4.23, 4.23, 4.23, 0.56, 3.73, -4.27, 2.48, 0.6, -0.91, 0.46, -1.18, -1.01, 3.12, 2.73, 1.04, 1.77, 0.44, -1.57, 2.23, 1.92, 1.34, 0.2, 1.29, 2.28, 0.01, 1.42, 0.63, -1.12, 2.27, 1.88, 1.91, 2.68, 2.18, 1.68, 3.67, 3.64, 2.48, 2.82, 3.09, 2.02, 2.81, 2.74],
    ["Pakistan", 22.13, -3.44, 2.88, 1.14, 0.08, 0.15, -0.63, 0.64, 0.38, 0.64, -1.41, -0.18, 0.97, 1.24, -0.38, -1.08, -2.81, 0.51, 1.68, 0.6, -0.94, 1.14, 0.26, 1.24, 0.31, 0.06, 2.53, 3.18, -0.65, 0.92, 0.02, 5.79, 3.63, -0.4, 1.08, 0.98, 0.98, 0.94, 1.69, 1.4, 0.58, -4.67, 1.16, 0.94, -2.29],
    ["Philippines", 27.06, 0.3, -0.04, 0.11, -0.04, 0.31, 0.26, -0.02, -0.3, -0.25, -0.06, 0.22, -0.03, -0.25, -0.24, 0.34, 0.26, 0.03, 0.24, -0.02, 0.06, 0.14, 0.02, -0.23, -0.08, -0.09, 0.72, -0.16, 0.15, 0.15, 0.16, 0.01, -0.22, -0.09, 0.29, 0.14, -0.08, -0.04, 0.33, -0.31, 0.04, 0.08, -0.07, 0.06, 0.53],
    ["Saudi Arabia", 23.51, -0.09, 0.42, -0.72, 0.48, -1.51, 0.21, 1.17, 0.57, 0.49, -1.05, -0.01, 0.54, 1.22, 0.99, 1.12, 1.26, 0.64, 0.96, 1.19, -0.49, 1.34, 1.54, 1.13, 1.61, 0.99, 2.15, 1.94, 1.59, 1.86, 1.81, 2.07, 1.7, 1.52, 2.11, 2.05, 1.92, 2.03, 2.83, 1.97, 2.36, -1.03, 5.43, 3.82, 2.27],
    ["Syria", 18.33, 0.93, -1.56, -0.47, -0.18, 0.12, 0.38, 0.63, -1.04, 0.63, 0.26, 0.31, 0.16, -0.09, 0.21, 0.02, 0.65, 1.54, -0.39, -0.09, -1.18, -0.42, 0.89, 0.23, 0.62, 0.27, 1.86, 0.56, 0.58, 0.69, 0.68, 1.87, 0.09, 1.46, 1.84, -0.73, 0.88, -0.11, 3.17, 0.68, 1.51, 3.43, -0.6, 3.13, 1.96],
    ["Thailand", 27.27, 0.03, -0.43, -0.27, -0.44, 0.01, 0.19, 0.5, 0.4, -0.16, 0.01, 0.21, -0.74, 0.04, 0.01, 0.57, 0.28, 0.32, 0.63, 0.68, 0.47, 0.37, 0.44, 0.58, 0.29, 0.72, 1.37, 0.27, 0.38, 0.73, 0.84, 0.67, 0.67, 0.72, 0.79, 0.65, 0.39, 0.72, 1.38, 0.34, 1.22, 0.98, 1.01, 1.4, 1.58],
    ["Türkiye", 13.63, -0.26, -0.89, -2.68, 0.54, 1.04, 0.79, 0.99, 0.63, 1.4, 0.29, -0.52, -0.06, 0.14, 0.09, -0.4, 0.04, 0.33, 0.47, 0.24, -0.87, -0.33, 1.29, 0.48, 0.77, -0.2, 1.19, 1.27, 0.31, 1.7, 0.68, 1.49, 0.59, 0.38, 0.91, 1.87, 1.12, 1.49, 2.94, 0.57, 1.61, 2.14, 2.77, 2.43, -3.67],
    ["Turkmenistan", 16.18, 1.9, -2.76, 0.29, -0.89, 0.08, -0.49, 0.56, 1.3, 0.68, -0.73, 0.08, -0.57, 0.99, 0.43, -0.29, -0.23, 0.8, 1.74, 0.88, 0.38, 0.11, 0.9, 1.53, 0.54, 1.31, 1.78, 2.12, 2.05, 2.49, 2.33, 2.06, 2.53, 3.4, 2.97, 1.17, 1.55, 2.25, 2.82, 1.82, 2.37, 2.61, 1.69, 3.1, 3.21],
    ["United Arab Emirates", 27.37, 0, 0, 0, 0, -4.97, 0.22, 5.47, -0.12, 1.13, -0.57, -0.39, -0.66, -0.07, 0.18, -0.23, 0.26, -0.56, 0.42, -0.54, -0.13, 0.44, 1.15, 0.02, 0.89, 0.13, 2.84, 2.95, -1, 0.54, 1.23, 1.16, 2.54, 2.19, 1.71, -0.89, 1.11, 1.92, 1.25, 1.82, 2.08, 0.71, 1.69, 1.51, 2.39],
    ["Vietnam", 25.36, 1.97, -0.97, 0.52, -0.05, 0.17, 0.38, -2.68, -2.68, -2.68, 1.51, 0.83, 1.3, 0.97, 0.99, 1.99, 1.77, 0.93, 1.23, 1.28, 0.19, 0.54, 0.48, 0.26, 0.08, 0.12, 1.03, 0.22, 0.12, 0.24, 0.42, 0.73, 0.05, 0.11, 0.53, 0.24, -0.14, 0.41, 0.76, -0.47, 0.45, 0.29, 0.31, -1.95, 1.08]
  ],
  "OCEANIA": [
    ["Australia", 18.38, 0.36, -0.34, -0.14, -0.48, -0.08, -0.34, 0.3, 0.57, 0.12, -0.11, 0.1, -0.62, -0.21, -0.44, -0.13, 0.56, -0.31, -0.26, -0.18, -0.66, -0.38, -0.44, -0.61, -0.59, -0.35, -0.11, -0.29, -0.29, -0.21, 0.19, 0.11, -0.02, 0.28, -0.06, 0.26, -0.21, 0.41, 0.01, -0.18, -0.18, 0.56, 0.48, 0.27, 0.41],
    ["Fiji", 26.11, 0, 0, 0, 1.39, 1.39, 1.39, -1.22, 0.79, -0.77, -0.77, -0.77, 1.39, 1.39, 1.39, -1.72, 1.27, -0.96, -0.66, -0.39, 0.97, -1.45, -1.12, -0.58, -0.54, -0.82, 0.27, 0.12, 0.58, 0.17, 0.71, 0.07, 0.19, 0.21, 0.11, 0.51, 0.04, -0.41, 0.42, 0.42, 0.18, 0.38, 0.19, -0.02, 0.45],
    ["French Polynesia", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03, -0.3, -0.33, -0.19, -0.15, -0.01, -0.06, -0.08, 0.13, -0.04, 0.11, -0.06, 0.26, 0.09, -0.02, 0.27, -0.05, 0.06, 0.23, 0.34, 0.24, 0.22, 0.55, 0.36, 0.28, 0.19, 0.48, 0.32, 0.07, 0.51, 0.29, 0.22, -0.09, 0.01, -0.05, 0.37, 0.45],
    ["New Zealand", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18, 0.08, -0.28, -0.36, 0.32, 0.29, 0.27, 0.35, 0.41, 0.63, 0.57, -0.2, -0.59, -0.37, -0.71, 0.26, 0.28, -0.06, 0.96, 0.91, 0.52, 0.65, 0.69, 0.47, 0.04, 0.84, 0.01, 0.26, 0.34, -0.26, 0.53, 0.21, 0.62, 1.62, 0.79, 0.37, 0.64],
    ["Tuvalu", 26.37, 0, 0, 0, 0, 0, 0, -0.92, -1.87, -0.87, 1.73, 1.49, 1.63, 1.85, 2.03, 1.65, 1.62, 1.57, 1.94, 2.03, 1.86, 1.77, 2.3, 1.86, 1.52, 1.52, 1.54, 1.73, 2.09, 2.23, 2.33, 2.38, 2.21, 2.32, 2.35, 2.23, 1.86, 2.23, 2.03, 2.12, 1.77, 2.38, 2.34, 2.36, 2.64],
  ]
}

// Modify defaults
root.numberFormatter.set("numberFormat", "+#.0°C|#.0°C|0.0°C");

var startYear = 1973;
var endYear = 2016;
var currentYear = 1995;

var div = document.getElementById("chartdiv");

var colorSet = am5.ColorSet.new(root, {});


// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(am5radar.RadarChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  innerRadius: am5.percent(40),
  radius: am5.percent(65),
  startAngle: 270 - 170,
  endAngle: 270 + 170
}));


// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "zoomX",
  radius: am5.percent(40),
  innerRadius: -25
}));
cursor.lineY.set("visible", false);


// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {
  minGridDistance: 10,
  minorGridEnabled: true
});

xRenderer.labels.template.setAll({
  radius: 10,
  textType: "radial",
  centerY: am5.p50
});

var yRenderer = am5radar.AxisRendererRadial.new(root, {
  axisAngle: 90
});

yRenderer.labels.template.setAll({
  centerX: am5.p50
});

var categoryAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "country",
  renderer: xRenderer
}));

var valueAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: -3,
  max: 6,
  extraMax: 0.1,
  renderer: yRenderer
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  calculateAggregates: true,
  name: "Series",
  xAxis: categoryAxis,
  yAxis: valueAxis,
  valueYField: "value" + currentYear,
  categoryXField: "country",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{categoryX}: {valueY}"
  })  
}));

series.columns.template.set("strokeOpacity", 0);

// Set up heat rules
// https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
series.set("heatRules", [{
  target: series.columns.template,
  key: "fill",
  min: am5.color(0x673AB7),
  max: am5.color(0xF44336),
  dataField: "valueY"
}]);

// Add scrollbars
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));
chart.set("scrollbarY", am5.Scrollbar.new(root, { orientation: "vertical" }));

// Add year label
var yearLabel = chart.radarContainer.children.push(am5.Label.new(root, {
  fontSize: "2em",
  text: currentYear.toString(),
  centerX: am5.p50,
  centerY: am5.p50,
  fill: am5.color(0x673AB7)
}));


// Generate and set data
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
var data = generateRadarData();
series.data.setAll(data);
categoryAxis.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);

function generateRadarData() {
  var data = [];
  var i = 0;
  for (var continent in temperatures) {
    var continentData = temperatures[continent];

    continentData.forEach(function(country) {
      var rawDataItem = { "country": country[0] }

      for (var y = 2; y < country.length; y++) {
        rawDataItem["value" + (startYear + y - 2)] = country[y];
      }

      data.push(rawDataItem);
    });

    createRange(continent, continentData, i);
    i++;

  }
  return data;
}


function createRange(name, continentData, index) {
  var axisRange = categoryAxis.createAxisRange(categoryAxis.makeDataItem({}));
  axisRange.get("label").setAll({ text: name });
  // first country
  axisRange.set("category", continentData[0][0]);
  // last country
  axisRange.set("endCategory", continentData[continentData.length - 1][0]);

  // every 3rd color for a bigger contrast
  var fill = axisRange.get("axisFill");
  fill.setAll({
    toggleKey: "active",
    cursorOverStyle: "pointer",
    fill: colorSet.getIndex(index * 3),
    visible: true,
    innerRadius: -25
  });
  axisRange.get("grid").set("visible", false);

  var label = axisRange.get("label");
  label.setAll({
    fill: am5.color(0xffffff),
    textType: "circular",
    radius: -16
  });

  fill.events.on("click", function(event) {
    var dataItem = event.target.dataItem;
    if (event.target.get("active")) {
      categoryAxis.zoom(0, 1);
    }
    else {
      categoryAxis.zoomToCategories(dataItem.get("category"), dataItem.get("endCategory"));
    }
  });
}


// Create controls
var container = chart.children.push(am5.Container.new(root, {
  y: am5.percent(95),
  centerX: am5.p50,
  x: am5.p50,
  width: am5.percent(80),
  layout: root.horizontalLayout
}));

var playButton = container.children.push(am5.Button.new(root, {
  themeTags: ["play"],
  centerY: am5.p50,
  marginRight: 15,
  icon: am5.Graphics.new(root, {
    themeTags: ["icon"]
  })
}));

playButton.events.on("click", function () {
  if (playButton.get("active")) {
    slider.set("start", slider.get("start") + 0.0001);
  }
  else {
    slider.animate({
      key: "start",
      to: 1,
      duration: 15000 * (1 - slider.get("start"))
    });
  }
})

var slider = container.children.push(am5.Slider.new(root, {
  orientation: "horizontal",
  start: 0.5,
  centerY: am5.p50
}));

slider.on("start", function (start) {
  if (start === 1) {
    playButton.set("active", false);
  }
});

slider.events.on("rangechanged", function () {
  updateRadarData(startYear + Math.round(slider.get("start", 0) * (endYear - startYear)));
});

function updateRadarData(year) {
  if (currentYear != year) {
    currentYear = year;
    yearLabel.set("text", currentYear.toString());
    am5.array.each(series.dataItems, function (dataItem) {
      var newValue = dataItem.dataContext["value" + year];
      dataItem.set("valueY", newValue);
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  }
}