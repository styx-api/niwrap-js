// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SCENE_CAPTURE_IMAGE_METADATA: Metadata = {
    id: "dade3da0774daec96e99cbdb16213df3a28b761f.boutiques",
    name: "scene-capture-image",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SceneCaptureImageSizeWidthHeightParameters {
    "__STYXTYPE__": "size_width_height";
    "width": number;
    "height": number;
}


interface SceneCaptureImageResolutionParameters {
    "__STYXTYPE__": "resolution";
    "number_of_pixels": number;
    "units_name": string;
}


interface SceneCaptureImageSetMapYokeParameters {
    "__STYXTYPE__": "set_map_yoke";
    "map_yoking_roman_numeral": string;
    "map_undex": number;
}


interface SceneCaptureImageConnDbLoginParameters {
    "__STYXTYPE__": "conn_db_login";
    "username": string;
    "password": string;
}


interface SceneCaptureImageParameters {
    "__STYXTYPE__": "scene-capture-image";
    "scene_file": string;
    "scene_name_or_number": string;
    "image_file_name": string;
    "opt_size_window": boolean;
    "opt_size_capture": boolean;
    "size_width_height"?: SceneCaptureImageSizeWidthHeightParameters | null | undefined;
    "opt_size_width_width"?: number | null | undefined;
    "opt_size_height_height"?: number | null | undefined;
    "opt_units_units"?: string | null | undefined;
    "resolution"?: SceneCaptureImageResolutionParameters | null | undefined;
    "opt_margin_size"?: number | null | undefined;
    "opt_no_scene_colors": boolean;
    "set_map_yoke"?: SceneCaptureImageSetMapYokeParameters | null | undefined;
    "conn_db_login"?: SceneCaptureImageConnDbLoginParameters | null | undefined;
    "opt_show_capture_settings": boolean;
    "opt_renderer_renderer"?: string | null | undefined;
    "opt_print_image_info": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "scene-capture-image": scene_capture_image_cargs,
        "size_width_height": scene_capture_image_size_width_height_cargs,
        "resolution": scene_capture_image_resolution_cargs,
        "set_map_yoke": scene_capture_image_set_map_yoke_cargs,
        "conn_db_login": scene_capture_image_conn_db_login_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


function scene_capture_image_size_width_height_params(
    width: number,
    height: number,
): SceneCaptureImageSizeWidthHeightParameters {
    /**
     * Build parameters.
    
     * @param width Width for output image
     * @param height Height for output image
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "size_width_height" as const,
        "width": width,
        "height": height,
    };
    return params;
}


function scene_capture_image_size_width_height_cargs(
    params: SceneCaptureImageSizeWidthHeightParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-size-width-height");
    cargs.push(String((params["width"] ?? null)));
    cargs.push(String((params["height"] ?? null)));
    return cargs;
}


function scene_capture_image_resolution_params(
    number_of_pixels: number,
    units_name: string,
): SceneCaptureImageResolutionParameters {
    /**
     * Build parameters.
    
     * @param number_of_pixels number of pixels
     * @param units_name Name of resolution units.  Valid resolution unit names are:
   PIXELS_PER_INCH
   PIXELS_PER_CENTIMETER
   PIXELS_PER_METER
   PIXELS_PER_MILLIMETER

    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "resolution" as const,
        "number_of_pixels": number_of_pixels,
        "units_name": units_name,
    };
    return params;
}


function scene_capture_image_resolution_cargs(
    params: SceneCaptureImageResolutionParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-resolution");
    cargs.push(String((params["number_of_pixels"] ?? null)));
    cargs.push((params["units_name"] ?? null));
    return cargs;
}


function scene_capture_image_set_map_yoke_params(
    map_yoking_roman_numeral: string,
    map_undex: number,
): SceneCaptureImageSetMapYokeParameters {
    /**
     * Build parameters.
    
     * @param map_yoking_roman_numeral Roman numeral identifying the map yoking group (I, II, III, IV, V, VI, VII, VIII, IX, X)
     * @param map_undex Map index for yoking group.  Indices start at 1 (one)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "set_map_yoke" as const,
        "map_yoking_roman_numeral": map_yoking_roman_numeral,
        "map_undex": map_undex,
    };
    return params;
}


function scene_capture_image_set_map_yoke_cargs(
    params: SceneCaptureImageSetMapYokeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-set-map-yoke");
    cargs.push((params["map_yoking_roman_numeral"] ?? null));
    cargs.push(String((params["map_undex"] ?? null)));
    return cargs;
}


function scene_capture_image_conn_db_login_params(
    username: string,
    password: string,
): SceneCaptureImageConnDbLoginParameters {
    /**
     * Build parameters.
    
     * @param username Connectome DB Username
     * @param password Connectome DB Password
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "conn_db_login" as const,
        "username": username,
        "password": password,
    };
    return params;
}


function scene_capture_image_conn_db_login_cargs(
    params: SceneCaptureImageConnDbLoginParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-conn-db-login");
    cargs.push((params["username"] ?? null));
    cargs.push((params["password"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `scene_capture_image(...)`.
 *
 * @interface
 */
interface SceneCaptureImageOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function scene_capture_image_params(
    scene_file: string,
    scene_name_or_number: string,
    image_file_name: string,
    opt_size_window: boolean = false,
    opt_size_capture: boolean = false,
    size_width_height: SceneCaptureImageSizeWidthHeightParameters | null = null,
    opt_size_width_width: number | null = null,
    opt_size_height_height: number | null = null,
    opt_units_units: string | null = null,
    resolution: SceneCaptureImageResolutionParameters | null = null,
    opt_margin_size: number | null = null,
    opt_no_scene_colors: boolean = false,
    set_map_yoke: SceneCaptureImageSetMapYokeParameters | null = null,
    conn_db_login: SceneCaptureImageConnDbLoginParameters | null = null,
    opt_show_capture_settings: boolean = false,
    opt_renderer_renderer: string | null = null,
    opt_print_image_info: boolean = false,
): SceneCaptureImageParameters {
    /**
     * Build parameters.
    
     * @param scene_file scene file
     * @param scene_name_or_number name or number (starting at one) of the scene in the scene file
     * @param image_file_name output - image file name
   The file name must end with a valid extension that identifies the image file format.  Valid extensions on this system are: (.bmp .jpeg .jpg .png .ppm).

   If there is more than one window in the scene, multiple image files are output with the window's number inserted into the name of the image file immediately before the image file's extension.
     * @param opt_size_window Output image is size of window's graphics region from when scene was created.
     * @param opt_size_capture Output image uses size from Capture Dialog when scene was created
     * @param size_width_height Width and height for output image
     * @param opt_size_width_width Width for output image.  Height is computed using the aspect ratio from the window's width and height saved in the scene.: Width for output image
     * @param opt_size_height_height Height for output image.  Width is computed using the aspect ratio from the window's width and height saved in the scene.: Height for output image
     * @param opt_units_units Units for image width/height
      Default is PIXELS: Name of units for image width/height.  Valid units are:
   INCHES
   CENTIMETERS
   MILLIMETERS
   METERS
   PIXELS

     * @param resolution Image resolution (number pixels per size unit)
      Default is 300 PIXELS_PER_INCH
     * @param opt_margin_size Add a margin to sides of the image using the window's background color.: size of margin, in pixels, added to all sides of output image
     * @param opt_no_scene_colors Do not use background and foreground colors in scene
     * @param set_map_yoke Override selected map index for a map yoking group.
     * @param conn_db_login Login for scenes with files in Connectome Database.  If this option is not specified, the login and password stored in the user's preferences is used.
     * @param opt_show_capture_settings Print settings from Capture Dialog only, DO NOT create image file(s)
     * @param opt_renderer_renderer Select renderer for drawing image: Name of renderer to use for drawing image
     * @param opt_print_image_info Print the size and other information about output images only and DO NOT create any output images
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "scene-capture-image" as const,
        "scene_file": scene_file,
        "scene_name_or_number": scene_name_or_number,
        "image_file_name": image_file_name,
        "opt_size_window": opt_size_window,
        "opt_size_capture": opt_size_capture,
        "opt_no_scene_colors": opt_no_scene_colors,
        "opt_show_capture_settings": opt_show_capture_settings,
        "opt_print_image_info": opt_print_image_info,
    };
    if (size_width_height !== null) {
        params["size_width_height"] = size_width_height;
    }
    if (opt_size_width_width !== null) {
        params["opt_size_width_width"] = opt_size_width_width;
    }
    if (opt_size_height_height !== null) {
        params["opt_size_height_height"] = opt_size_height_height;
    }
    if (opt_units_units !== null) {
        params["opt_units_units"] = opt_units_units;
    }
    if (resolution !== null) {
        params["resolution"] = resolution;
    }
    if (opt_margin_size !== null) {
        params["opt_margin_size"] = opt_margin_size;
    }
    if (set_map_yoke !== null) {
        params["set_map_yoke"] = set_map_yoke;
    }
    if (conn_db_login !== null) {
        params["conn_db_login"] = conn_db_login;
    }
    if (opt_renderer_renderer !== null) {
        params["opt_renderer_renderer"] = opt_renderer_renderer;
    }
    return params;
}


function scene_capture_image_cargs(
    params: SceneCaptureImageParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-scene-capture-image");
    cargs.push((params["scene_file"] ?? null));
    cargs.push((params["scene_name_or_number"] ?? null));
    cargs.push((params["image_file_name"] ?? null));
    if ((params["opt_size_window"] ?? null)) {
        cargs.push("-size-window");
    }
    if ((params["opt_size_capture"] ?? null)) {
        cargs.push("-size-capture");
    }
    if ((params["size_width_height"] ?? null) !== null) {
        cargs.push(...dynCargs((params["size_width_height"] ?? null).__STYXTYPE__)((params["size_width_height"] ?? null), execution));
    }
    if ((params["opt_size_width_width"] ?? null) !== null) {
        cargs.push(
            "-size-width",
            String((params["opt_size_width_width"] ?? null))
        );
    }
    if ((params["opt_size_height_height"] ?? null) !== null) {
        cargs.push(
            "-size-height",
            String((params["opt_size_height_height"] ?? null))
        );
    }
    if ((params["opt_units_units"] ?? null) !== null) {
        cargs.push(
            "-units",
            (params["opt_units_units"] ?? null)
        );
    }
    if ((params["resolution"] ?? null) !== null) {
        cargs.push(...dynCargs((params["resolution"] ?? null).__STYXTYPE__)((params["resolution"] ?? null), execution));
    }
    if ((params["opt_margin_size"] ?? null) !== null) {
        cargs.push(
            "-margin",
            String((params["opt_margin_size"] ?? null))
        );
    }
    if ((params["opt_no_scene_colors"] ?? null)) {
        cargs.push("-no-scene-colors");
    }
    if ((params["set_map_yoke"] ?? null) !== null) {
        cargs.push(...dynCargs((params["set_map_yoke"] ?? null).__STYXTYPE__)((params["set_map_yoke"] ?? null), execution));
    }
    if ((params["conn_db_login"] ?? null) !== null) {
        cargs.push(...dynCargs((params["conn_db_login"] ?? null).__STYXTYPE__)((params["conn_db_login"] ?? null), execution));
    }
    if ((params["opt_show_capture_settings"] ?? null)) {
        cargs.push("-show-capture-settings");
    }
    if ((params["opt_renderer_renderer"] ?? null) !== null) {
        cargs.push(
            "-renderer",
            (params["opt_renderer_renderer"] ?? null)
        );
    }
    if ((params["opt_print_image_info"] ?? null)) {
        cargs.push("-print-image-info");
    }
    return cargs;
}


function scene_capture_image_outputs(
    params: SceneCaptureImageParameters,
    execution: Execution,
): SceneCaptureImageOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SceneCaptureImageOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function scene_capture_image_execute(
    params: SceneCaptureImageParameters,
    execution: Execution,
): SceneCaptureImageOutputs {
    /**
     * Offscreen rendering of scene to an image file.
     * 
     * ----------------------------------------------------------------------
     * 
     * Render content of browser windows displayed in a scene into image file(s).
     * 
     * If none of the "-size" options are specified, the default is "-size-window" (Output image is size of the window that was saved in the scene).
     * 
     * For the "-size" options that accept a width and/or height, the values default to number of pixels.  To express the width and/or height in physical units (inches, centimeters, etc.), use the "-units" option.  When physical units are used, the pixel width and height are derived using the physical width/height and the image resolution (see the "-resolution" option).
     * 
     * Note that scenes created prior to version 1.2 (May 2016) do not contain information about the size of the window.  Therefore, one must use the "-size-width-height" option.
     * 
     * Examples:
     * 
     * Generate an image of the second scene.  Width and height of image is width and height of window saved in the scene.  
     *    wb_command -scene-capture-image myscene.scene 2 image2.jpg
     * 
     * Generate an image of the second scene with a margin around sides of the image. Width and height of image is width and height of window saved in the scene.  
     *    wb_command -scene-capture-image myscene.scene 2 image2.jpg  -margin 10
     * 
     * Generate an image of the second scene that is 6 inches width with 300 pixels per inch.  The resulting width is 1800 pixels.  The resulting height of the image is a function of the width and the aspect ratio (height divided by width) of the window size saved in the scene.
     *    wb_command -scene-capture-image myscene.scene 2 image21.jpg \ 
     *    -size-width 6 -units INCHES -resolution 300 PIXELS_PER_INCH
     * 
     * Print information about the size of the output image for the second scene (no image file is created) using a width of 4.5 centimeters. 
     *    wb_command -scene-capture-image myscene.scene 2 test.jpg \ 
     *    -size-width 4.5 -units CENTIMETERS -print-image-info
     * 
     * 
     * 
     * 
     * NO OFF SCREEN RENDERERS AVAILABLE ON THIS SYSTEM.  COMMAND WILL FAIL !!!!
     * 
     * 
     * ERROR: -scene-capture-image is not available !
     * A required library for this command, Mesa3D (software version of OpenGL), was not available when this software was created.  This command is not available for the Windows version of this software but should always be available in the Linux and MacOS versions.
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SceneCaptureImageOutputs`).
     */
    params = execution.params(params)
    const cargs = scene_capture_image_cargs(params, execution)
    const ret = scene_capture_image_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function scene_capture_image(
    scene_file: string,
    scene_name_or_number: string,
    image_file_name: string,
    opt_size_window: boolean = false,
    opt_size_capture: boolean = false,
    size_width_height: SceneCaptureImageSizeWidthHeightParameters | null = null,
    opt_size_width_width: number | null = null,
    opt_size_height_height: number | null = null,
    opt_units_units: string | null = null,
    resolution: SceneCaptureImageResolutionParameters | null = null,
    opt_margin_size: number | null = null,
    opt_no_scene_colors: boolean = false,
    set_map_yoke: SceneCaptureImageSetMapYokeParameters | null = null,
    conn_db_login: SceneCaptureImageConnDbLoginParameters | null = null,
    opt_show_capture_settings: boolean = false,
    opt_renderer_renderer: string | null = null,
    opt_print_image_info: boolean = false,
    runner: Runner | null = null,
): SceneCaptureImageOutputs {
    /**
     * Offscreen rendering of scene to an image file.
     * 
     * ----------------------------------------------------------------------
     * 
     * Render content of browser windows displayed in a scene into image file(s).
     * 
     * If none of the "-size" options are specified, the default is "-size-window" (Output image is size of the window that was saved in the scene).
     * 
     * For the "-size" options that accept a width and/or height, the values default to number of pixels.  To express the width and/or height in physical units (inches, centimeters, etc.), use the "-units" option.  When physical units are used, the pixel width and height are derived using the physical width/height and the image resolution (see the "-resolution" option).
     * 
     * Note that scenes created prior to version 1.2 (May 2016) do not contain information about the size of the window.  Therefore, one must use the "-size-width-height" option.
     * 
     * Examples:
     * 
     * Generate an image of the second scene.  Width and height of image is width and height of window saved in the scene.  
     *    wb_command -scene-capture-image myscene.scene 2 image2.jpg
     * 
     * Generate an image of the second scene with a margin around sides of the image. Width and height of image is width and height of window saved in the scene.  
     *    wb_command -scene-capture-image myscene.scene 2 image2.jpg  -margin 10
     * 
     * Generate an image of the second scene that is 6 inches width with 300 pixels per inch.  The resulting width is 1800 pixels.  The resulting height of the image is a function of the width and the aspect ratio (height divided by width) of the window size saved in the scene.
     *    wb_command -scene-capture-image myscene.scene 2 image21.jpg \ 
     *    -size-width 6 -units INCHES -resolution 300 PIXELS_PER_INCH
     * 
     * Print information about the size of the output image for the second scene (no image file is created) using a width of 4.5 centimeters. 
     *    wb_command -scene-capture-image myscene.scene 2 test.jpg \ 
     *    -size-width 4.5 -units CENTIMETERS -print-image-info
     * 
     * 
     * 
     * 
     * NO OFF SCREEN RENDERERS AVAILABLE ON THIS SYSTEM.  COMMAND WILL FAIL !!!!
     * 
     * 
     * ERROR: -scene-capture-image is not available !
     * A required library for this command, Mesa3D (software version of OpenGL), was not available when this software was created.  This command is not available for the Windows version of this software but should always be available in the Linux and MacOS versions.
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param scene_file scene file
     * @param scene_name_or_number name or number (starting at one) of the scene in the scene file
     * @param image_file_name output - image file name
   The file name must end with a valid extension that identifies the image file format.  Valid extensions on this system are: (.bmp .jpeg .jpg .png .ppm).

   If there is more than one window in the scene, multiple image files are output with the window's number inserted into the name of the image file immediately before the image file's extension.
     * @param opt_size_window Output image is size of window's graphics region from when scene was created.
     * @param opt_size_capture Output image uses size from Capture Dialog when scene was created
     * @param size_width_height Width and height for output image
     * @param opt_size_width_width Width for output image.  Height is computed using the aspect ratio from the window's width and height saved in the scene.: Width for output image
     * @param opt_size_height_height Height for output image.  Width is computed using the aspect ratio from the window's width and height saved in the scene.: Height for output image
     * @param opt_units_units Units for image width/height
      Default is PIXELS: Name of units for image width/height.  Valid units are:
   INCHES
   CENTIMETERS
   MILLIMETERS
   METERS
   PIXELS

     * @param resolution Image resolution (number pixels per size unit)
      Default is 300 PIXELS_PER_INCH
     * @param opt_margin_size Add a margin to sides of the image using the window's background color.: size of margin, in pixels, added to all sides of output image
     * @param opt_no_scene_colors Do not use background and foreground colors in scene
     * @param set_map_yoke Override selected map index for a map yoking group.
     * @param conn_db_login Login for scenes with files in Connectome Database.  If this option is not specified, the login and password stored in the user's preferences is used.
     * @param opt_show_capture_settings Print settings from Capture Dialog only, DO NOT create image file(s)
     * @param opt_renderer_renderer Select renderer for drawing image: Name of renderer to use for drawing image
     * @param opt_print_image_info Print the size and other information about output images only and DO NOT create any output images
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SceneCaptureImageOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SCENE_CAPTURE_IMAGE_METADATA);
    const params = scene_capture_image_params(scene_file, scene_name_or_number, image_file_name, opt_size_window, opt_size_capture, size_width_height, opt_size_width_width, opt_size_height_height, opt_units_units, resolution, opt_margin_size, opt_no_scene_colors, set_map_yoke, conn_db_login, opt_show_capture_settings, opt_renderer_renderer, opt_print_image_info)
    return scene_capture_image_execute(params, execution);
}


export {
      SCENE_CAPTURE_IMAGE_METADATA,
      SceneCaptureImageConnDbLoginParameters,
      SceneCaptureImageOutputs,
      SceneCaptureImageParameters,
      SceneCaptureImageResolutionParameters,
      SceneCaptureImageSetMapYokeParameters,
      SceneCaptureImageSizeWidthHeightParameters,
      scene_capture_image,
      scene_capture_image_conn_db_login_params,
      scene_capture_image_params,
      scene_capture_image_resolution_params,
      scene_capture_image_set_map_yoke_params,
      scene_capture_image_size_width_height_params,
};
