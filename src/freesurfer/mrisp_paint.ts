// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRISP_PAINT_METADATA: Metadata = {
    id: "d16941ee5e8f63175f830c6357cad0fb5eda9270.boutiques",
    name: "mrisp_paint",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrispPaintParameters {
    "__STYXTYPE__": "mrisp_paint";
    "template_file": InputPathType;
    "input_surface": InputPathType;
    "output_name": string;
    "subjects_dir"?: string | null | undefined;
    "vertex_coords"?: string | null | undefined;
    "average_flag"?: number | null | undefined;
    "normalize_flag": boolean;
    "frame_number"?: number | null | undefined;
    "square_root_flag": boolean;
    "variance_params"?: string | null | undefined;
    "usage_flag": boolean;
    "birn_info_flag": boolean;
    "help_flag": boolean;
    "diag_vertex"?: number | null | undefined;
    "version_flag": boolean;
    "diag_write_flag": boolean;
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
        "mrisp_paint": mrisp_paint_cargs,
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
        "mrisp_paint": mrisp_paint_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mrisp_paint(...)`.
 *
 * @interface
 */
interface MrispPaintOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing a surface-worth of per-vertex values in 'curvature' format.
     */
    output_file: OutputPathType;
}


function mrisp_paint_params(
    template_file: InputPathType,
    input_surface: InputPathType,
    output_name: string,
    subjects_dir: string | null = null,
    vertex_coords: string | null = null,
    average_flag: number | null = null,
    normalize_flag: boolean = false,
    frame_number: number | null = null,
    square_root_flag: boolean = false,
    variance_params: string | null = null,
    usage_flag: boolean = false,
    birn_info_flag: boolean = false,
    help_flag: boolean = false,
    diag_vertex: number | null = null,
    version_flag: boolean = false,
    diag_write_flag: boolean = false,
): MrispPaintParameters {
    /**
     * Build parameters.
    
     * @param template_file Full path to the template file. Template may contain multiple parameters. Example: 'somepath/mytemplate.tif#1'.
     * @param input_surface Full path to the input surface file, which provides the grid onto which the template data is sampled.
     * @param output_name Output file name. Saves the surface-worth of per-vertex values.
     * @param subjects_dir Set the SUBJECTS_DIR. Default: use environment variable.
     * @param vertex_coords Treat overlay as a surface and write it into a 3 frame parameterization.
     * @param average_flag Average curvature patterns a given number of times.
     * @param normalize_flag Normalize curvature by variance.
     * @param frame_number Paint the specified frame number to the output file. Default: 0.
     * @param square_root_flag Take the square-root of the output variable.
     * @param variance_params Generate variance map. Requires subject name, hemisphere, and field number.
     * @param usage_flag Print usage.
     * @param birn_info_flag Print BIRN-standard program information.
     * @param help_flag Print help message.
     * @param diag_vertex Invoke diagnostics for a specific vertex number.
     * @param version_flag Print version information.
     * @param diag_write_flag Write some diagnostics (DIAG_WRITE).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mrisp_paint" as const,
        "template_file": template_file,
        "input_surface": input_surface,
        "output_name": output_name,
        "normalize_flag": normalize_flag,
        "square_root_flag": square_root_flag,
        "usage_flag": usage_flag,
        "birn_info_flag": birn_info_flag,
        "help_flag": help_flag,
        "version_flag": version_flag,
        "diag_write_flag": diag_write_flag,
    };
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (vertex_coords !== null) {
        params["vertex_coords"] = vertex_coords;
    }
    if (average_flag !== null) {
        params["average_flag"] = average_flag;
    }
    if (frame_number !== null) {
        params["frame_number"] = frame_number;
    }
    if (variance_params !== null) {
        params["variance_params"] = variance_params;
    }
    if (diag_vertex !== null) {
        params["diag_vertex"] = diag_vertex;
    }
    return params;
}


function mrisp_paint_cargs(
    params: MrispPaintParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mrisp_paint");
    cargs.push(execution.inputFile((params["template_file"] ?? null)));
    cargs.push(execution.inputFile((params["input_surface"] ?? null)));
    cargs.push((params["output_name"] ?? null));
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "-SDIR",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["vertex_coords"] ?? null) !== null) {
        cargs.push(
            "-coords",
            (params["vertex_coords"] ?? null)
        );
    }
    if ((params["average_flag"] ?? null) !== null) {
        cargs.push(
            "-A",
            String((params["average_flag"] ?? null))
        );
    }
    if ((params["normalize_flag"] ?? null)) {
        cargs.push("-N");
    }
    if ((params["frame_number"] ?? null) !== null) {
        cargs.push(
            "-f",
            String((params["frame_number"] ?? null))
        );
    }
    if ((params["square_root_flag"] ?? null)) {
        cargs.push("-S");
    }
    if ((params["variance_params"] ?? null) !== null) {
        cargs.push(
            "-variance",
            (params["variance_params"] ?? null)
        );
    }
    if ((params["usage_flag"] ?? null)) {
        cargs.push("-?");
    }
    if ((params["birn_info_flag"] ?? null)) {
        cargs.push("--all-info");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["diag_vertex"] ?? null) !== null) {
        cargs.push(
            "-V",
            String((params["diag_vertex"] ?? null))
        );
    }
    if ((params["version_flag"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["diag_write_flag"] ?? null)) {
        cargs.push("-W");
    }
    return cargs;
}


function mrisp_paint_outputs(
    params: MrispPaintParameters,
    execution: Execution,
): MrispPaintOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrispPaintOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_name"] ?? null)].join('')),
    };
    return ret;
}


function mrisp_paint_execute(
    params: MrispPaintParameters,
    execution: Execution,
): MrispPaintOutputs {
    /**
     * A tool for extracting arrays from a surface-registration template file and sampling them onto a surface mesh.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrispPaintOutputs`).
     */
    params = execution.params(params)
    const cargs = mrisp_paint_cargs(params, execution)
    const ret = mrisp_paint_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mrisp_paint(
    template_file: InputPathType,
    input_surface: InputPathType,
    output_name: string,
    subjects_dir: string | null = null,
    vertex_coords: string | null = null,
    average_flag: number | null = null,
    normalize_flag: boolean = false,
    frame_number: number | null = null,
    square_root_flag: boolean = false,
    variance_params: string | null = null,
    usage_flag: boolean = false,
    birn_info_flag: boolean = false,
    help_flag: boolean = false,
    diag_vertex: number | null = null,
    version_flag: boolean = false,
    diag_write_flag: boolean = false,
    runner: Runner | null = null,
): MrispPaintOutputs {
    /**
     * A tool for extracting arrays from a surface-registration template file and sampling them onto a surface mesh.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param template_file Full path to the template file. Template may contain multiple parameters. Example: 'somepath/mytemplate.tif#1'.
     * @param input_surface Full path to the input surface file, which provides the grid onto which the template data is sampled.
     * @param output_name Output file name. Saves the surface-worth of per-vertex values.
     * @param subjects_dir Set the SUBJECTS_DIR. Default: use environment variable.
     * @param vertex_coords Treat overlay as a surface and write it into a 3 frame parameterization.
     * @param average_flag Average curvature patterns a given number of times.
     * @param normalize_flag Normalize curvature by variance.
     * @param frame_number Paint the specified frame number to the output file. Default: 0.
     * @param square_root_flag Take the square-root of the output variable.
     * @param variance_params Generate variance map. Requires subject name, hemisphere, and field number.
     * @param usage_flag Print usage.
     * @param birn_info_flag Print BIRN-standard program information.
     * @param help_flag Print help message.
     * @param diag_vertex Invoke diagnostics for a specific vertex number.
     * @param version_flag Print version information.
     * @param diag_write_flag Write some diagnostics (DIAG_WRITE).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrispPaintOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRISP_PAINT_METADATA);
    const params = mrisp_paint_params(template_file, input_surface, output_name, subjects_dir, vertex_coords, average_flag, normalize_flag, frame_number, square_root_flag, variance_params, usage_flag, birn_info_flag, help_flag, diag_vertex, version_flag, diag_write_flag)
    return mrisp_paint_execute(params, execution);
}


export {
      MRISP_PAINT_METADATA,
      MrispPaintOutputs,
      MrispPaintParameters,
      mrisp_paint,
      mrisp_paint_params,
};
