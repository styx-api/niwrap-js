// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DRIVE_SUMA_METADATA: Metadata = {
    id: "926f692f4116a5424cd5bd01a3b09ea3e0539288.boutiques",
    name: "DriveSuma",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface DriveSumaParameters {
    "__STYXTYPE__": "DriveSuma";
    "command": string;
    "surf_label"?: string | null | undefined;
    "surface_file"?: InputPathType | null | undefined;
    "surf_state"?: string | null | undefined;
    "surf_winding"?: string | null | undefined;
    "coordinates"?: InputPathType | null | undefined;
    "autorecord"?: string | null | undefined;
    "background_color"?: string | null | undefined;
    "view_file"?: InputPathType | null | undefined;
    "do_file"?: InputPathType | null | undefined;
    "do_draw_mask"?: string | null | undefined;
    "fixed_do"?: string | null | undefined;
    "mobile_do"?: string | null | undefined;
    "key_press"?: string | null | undefined;
    "viewer"?: string | null | undefined;
    "anim_dup"?: number | null | undefined;
    "save_as"?: string | null | undefined;
    "save_index"?: number | null | undefined;
    "save_range"?: string | null | undefined;
    "save_last": boolean;
    "save_last_n"?: number | null | undefined;
    "save_all": boolean;
    "echo_edu": boolean;
    "echo_nel_stdout": boolean;
    "echo_nel_stderr": boolean;
    "examples": boolean;
    "help": boolean;
    "h": boolean;
    "help_nido": boolean;
    "c_demo": boolean;
    "viewer_cont": boolean;
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
        "DriveSuma": drive_suma_cargs,
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


/**
 * Output object returned when calling `drive_suma(...)`.
 *
 * @interface
 */
interface DriveSumaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function drive_suma_params(
    command: string,
    surf_label: string | null = null,
    surface_file: InputPathType | null = null,
    surf_state: string | null = null,
    surf_winding: string | null = null,
    coordinates: InputPathType | null = null,
    autorecord: string | null = null,
    background_color: string | null = null,
    view_file: InputPathType | null = null,
    do_file: InputPathType | null = null,
    do_draw_mask: string | null = null,
    fixed_do: string | null = null,
    mobile_do: string | null = null,
    key_press: string | null = null,
    viewer: string | null = null,
    anim_dup: number | null = null,
    save_as: string | null = null,
    save_index: number | null = null,
    save_range: string | null = null,
    save_last: boolean = false,
    save_last_n: number | null = null,
    save_all: boolean = false,
    echo_edu: boolean = false,
    echo_nel_stdout: boolean = false,
    echo_nel_stderr: boolean = false,
    examples: boolean = false,
    help: boolean = false,
    h: boolean = false,
    help_nido: boolean = false,
    c_demo: boolean = false,
    viewer_cont: boolean = false,
): DriveSumaParameters {
    /**
     * Build parameters.
    
     * @param command Command to be sent to SUMA.
     * @param surf_label A label (identifier) to assign to the surface
     * @param surface_file Name of surface file
     * @param surf_state Name the state of that surface
     * @param surf_winding Winding of triangles (ccw or cw)
     * @param coordinates A 1D formatted file containing new coordinates for nodes
     * @param autorecord Set the autorecord prefix
     * @param background_color Set the background color (R G B)
     * @param view_file Load a previously saved view file
     * @param do_file Load a displayable object file
     * @param do_draw_mask Restrict where DO node-based objects are displayed
     * @param fixed_do Load a fixed coordinate type NIML DO
     * @param mobile_do Mobile version of fixed_do
     * @param key_press Act as if a key press was applied in the viewer
     * @param viewer Specify which viewer should be acted upon
     * @param anim_dup Save DUP copies of each frame into movie
     * @param save_as Save image(s) in recorder in specified format
     * @param save_index Save one image indexed IND
     * @param save_range Save images from FROM to TO
     * @param save_last Save last image
     * @param save_last_n Save last N images
     * @param save_all Save all images
     * @param echo_edu Echoes the entire command line for edification purposes
     * @param echo_nel_stdout Spit out the NIML object being sent to SUMA to stdout
     * @param echo_nel_stderr Spit out the NIML object being sent to SUMA to stderr
     * @param examples Show all the sample commands and exit
     * @param help Show the help in detail
     * @param h Show help with slightly less detail
     * @param help_nido Show the help for NIML Displayable Objects and exit
     * @param c_demo Execute a preset number of commands to illustrate how one can communicate with SUMA from one's own C code
     * @param viewer_cont Apply settings to viewer or viewer controller
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "DriveSuma" as const,
        "command": command,
        "save_last": save_last,
        "save_all": save_all,
        "echo_edu": echo_edu,
        "echo_nel_stdout": echo_nel_stdout,
        "echo_nel_stderr": echo_nel_stderr,
        "examples": examples,
        "help": help,
        "h": h,
        "help_nido": help_nido,
        "c_demo": c_demo,
        "viewer_cont": viewer_cont,
    };
    if (surf_label !== null) {
        params["surf_label"] = surf_label;
    }
    if (surface_file !== null) {
        params["surface_file"] = surface_file;
    }
    if (surf_state !== null) {
        params["surf_state"] = surf_state;
    }
    if (surf_winding !== null) {
        params["surf_winding"] = surf_winding;
    }
    if (coordinates !== null) {
        params["coordinates"] = coordinates;
    }
    if (autorecord !== null) {
        params["autorecord"] = autorecord;
    }
    if (background_color !== null) {
        params["background_color"] = background_color;
    }
    if (view_file !== null) {
        params["view_file"] = view_file;
    }
    if (do_file !== null) {
        params["do_file"] = do_file;
    }
    if (do_draw_mask !== null) {
        params["do_draw_mask"] = do_draw_mask;
    }
    if (fixed_do !== null) {
        params["fixed_do"] = fixed_do;
    }
    if (mobile_do !== null) {
        params["mobile_do"] = mobile_do;
    }
    if (key_press !== null) {
        params["key_press"] = key_press;
    }
    if (viewer !== null) {
        params["viewer"] = viewer;
    }
    if (anim_dup !== null) {
        params["anim_dup"] = anim_dup;
    }
    if (save_as !== null) {
        params["save_as"] = save_as;
    }
    if (save_index !== null) {
        params["save_index"] = save_index;
    }
    if (save_range !== null) {
        params["save_range"] = save_range;
    }
    if (save_last_n !== null) {
        params["save_last_n"] = save_last_n;
    }
    return params;
}


function drive_suma_cargs(
    params: DriveSumaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("DriveSuma");
    cargs.push((params["command"] ?? null));
    if ((params["surf_label"] ?? null) !== null) {
        cargs.push(
            "-surf_label",
            (params["surf_label"] ?? null)
        );
    }
    if ((params["surface_file"] ?? null) !== null) {
        cargs.push(
            "-i_TYPE",
            execution.inputFile((params["surface_file"] ?? null))
        );
    }
    if ((params["surf_state"] ?? null) !== null) {
        cargs.push(
            "-surf_state",
            (params["surf_state"] ?? null)
        );
    }
    if ((params["surf_winding"] ?? null) !== null) {
        cargs.push(
            "-surf_winding",
            (params["surf_winding"] ?? null)
        );
    }
    if ((params["coordinates"] ?? null) !== null) {
        cargs.push(
            "-xyz_1D",
            execution.inputFile((params["coordinates"] ?? null))
        );
    }
    if ((params["autorecord"] ?? null) !== null) {
        cargs.push(
            "-autorecord",
            (params["autorecord"] ?? null)
        );
    }
    if ((params["background_color"] ?? null) !== null) {
        cargs.push(
            "-bkg_col",
            (params["background_color"] ?? null)
        );
    }
    if ((params["view_file"] ?? null) !== null) {
        cargs.push(
            "-load_view",
            execution.inputFile((params["view_file"] ?? null))
        );
    }
    if ((params["do_file"] ?? null) !== null) {
        cargs.push(
            "-load_do",
            execution.inputFile((params["do_file"] ?? null))
        );
    }
    if ((params["do_draw_mask"] ?? null) !== null) {
        cargs.push(
            "-do_draw_mask",
            (params["do_draw_mask"] ?? null)
        );
    }
    if ((params["fixed_do"] ?? null) !== null) {
        cargs.push(
            "-fixed_do",
            (params["fixed_do"] ?? null)
        );
    }
    if ((params["mobile_do"] ?? null) !== null) {
        cargs.push(
            "-mobile_do",
            (params["mobile_do"] ?? null)
        );
    }
    if ((params["key_press"] ?? null) !== null) {
        cargs.push(
            "-key",
            (params["key_press"] ?? null)
        );
    }
    if ((params["viewer"] ?? null) !== null) {
        cargs.push(
            "-viewer",
            (params["viewer"] ?? null)
        );
    }
    if ((params["anim_dup"] ?? null) !== null) {
        cargs.push(
            "-anim_dup",
            String((params["anim_dup"] ?? null))
        );
    }
    if ((params["save_as"] ?? null) !== null) {
        cargs.push(
            "-save_as",
            (params["save_as"] ?? null)
        );
    }
    if ((params["save_index"] ?? null) !== null) {
        cargs.push(
            "-save_index",
            String((params["save_index"] ?? null))
        );
    }
    if ((params["save_range"] ?? null) !== null) {
        cargs.push(
            "-save_range",
            (params["save_range"] ?? null)
        );
    }
    if ((params["save_last"] ?? null)) {
        cargs.push("-save_last");
    }
    if ((params["save_last_n"] ?? null) !== null) {
        cargs.push(
            "-save_last_n",
            String((params["save_last_n"] ?? null))
        );
    }
    if ((params["save_all"] ?? null)) {
        cargs.push("-save_all");
    }
    if ((params["echo_edu"] ?? null)) {
        cargs.push("-echo_edu");
    }
    if ((params["echo_nel_stdout"] ?? null)) {
        cargs.push("-echo_nel_stdout");
    }
    if ((params["echo_nel_stderr"] ?? null)) {
        cargs.push("-echo_nel_stderr");
    }
    if ((params["examples"] ?? null)) {
        cargs.push("-examples");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["h"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["help_nido"] ?? null)) {
        cargs.push("-help_nido");
    }
    if ((params["c_demo"] ?? null)) {
        cargs.push("-C_demo");
    }
    if ((params["viewer_cont"] ?? null)) {
        cargs.push("-com viewer_cont");
    }
    return cargs;
}


function drive_suma_outputs(
    params: DriveSumaParameters,
    execution: Execution,
): DriveSumaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DriveSumaOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function drive_suma_execute(
    params: DriveSumaParameters,
    execution: Execution,
): DriveSumaOutputs {
    /**
     * A program to drive suma from the command line.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DriveSumaOutputs`).
     */
    params = execution.params(params)
    const cargs = drive_suma_cargs(params, execution)
    const ret = drive_suma_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function drive_suma(
    command: string,
    surf_label: string | null = null,
    surface_file: InputPathType | null = null,
    surf_state: string | null = null,
    surf_winding: string | null = null,
    coordinates: InputPathType | null = null,
    autorecord: string | null = null,
    background_color: string | null = null,
    view_file: InputPathType | null = null,
    do_file: InputPathType | null = null,
    do_draw_mask: string | null = null,
    fixed_do: string | null = null,
    mobile_do: string | null = null,
    key_press: string | null = null,
    viewer: string | null = null,
    anim_dup: number | null = null,
    save_as: string | null = null,
    save_index: number | null = null,
    save_range: string | null = null,
    save_last: boolean = false,
    save_last_n: number | null = null,
    save_all: boolean = false,
    echo_edu: boolean = false,
    echo_nel_stdout: boolean = false,
    echo_nel_stderr: boolean = false,
    examples: boolean = false,
    help: boolean = false,
    h: boolean = false,
    help_nido: boolean = false,
    c_demo: boolean = false,
    viewer_cont: boolean = false,
    runner: Runner | null = null,
): DriveSumaOutputs {
    /**
     * A program to drive suma from the command line.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param command Command to be sent to SUMA.
     * @param surf_label A label (identifier) to assign to the surface
     * @param surface_file Name of surface file
     * @param surf_state Name the state of that surface
     * @param surf_winding Winding of triangles (ccw or cw)
     * @param coordinates A 1D formatted file containing new coordinates for nodes
     * @param autorecord Set the autorecord prefix
     * @param background_color Set the background color (R G B)
     * @param view_file Load a previously saved view file
     * @param do_file Load a displayable object file
     * @param do_draw_mask Restrict where DO node-based objects are displayed
     * @param fixed_do Load a fixed coordinate type NIML DO
     * @param mobile_do Mobile version of fixed_do
     * @param key_press Act as if a key press was applied in the viewer
     * @param viewer Specify which viewer should be acted upon
     * @param anim_dup Save DUP copies of each frame into movie
     * @param save_as Save image(s) in recorder in specified format
     * @param save_index Save one image indexed IND
     * @param save_range Save images from FROM to TO
     * @param save_last Save last image
     * @param save_last_n Save last N images
     * @param save_all Save all images
     * @param echo_edu Echoes the entire command line for edification purposes
     * @param echo_nel_stdout Spit out the NIML object being sent to SUMA to stdout
     * @param echo_nel_stderr Spit out the NIML object being sent to SUMA to stderr
     * @param examples Show all the sample commands and exit
     * @param help Show the help in detail
     * @param h Show help with slightly less detail
     * @param help_nido Show the help for NIML Displayable Objects and exit
     * @param c_demo Execute a preset number of commands to illustrate how one can communicate with SUMA from one's own C code
     * @param viewer_cont Apply settings to viewer or viewer controller
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DriveSumaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DRIVE_SUMA_METADATA);
    const params = drive_suma_params(command, surf_label, surface_file, surf_state, surf_winding, coordinates, autorecord, background_color, view_file, do_file, do_draw_mask, fixed_do, mobile_do, key_press, viewer, anim_dup, save_as, save_index, save_range, save_last, save_last_n, save_all, echo_edu, echo_nel_stdout, echo_nel_stderr, examples, help, h, help_nido, c_demo, viewer_cont)
    return drive_suma_execute(params, execution);
}


export {
      DRIVE_SUMA_METADATA,
      DriveSumaOutputs,
      DriveSumaParameters,
      drive_suma,
      drive_suma_params,
};
