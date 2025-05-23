// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MREDIT_METADATA: Metadata = {
    id: "9ffef6548a8d55005ba7462a213b391f4d2da89f.boutiques",
    name: "mredit",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface MreditPlaneParameters {
    "__STYXTYPE__": "plane";
    "axis": number;
    "coord": Array<number>;
    "value": number;
}


interface MreditSphereParameters {
    "__STYXTYPE__": "sphere";
    "position": Array<number>;
    "radius": number;
    "value": number;
}


interface MreditVoxelParameters {
    "__STYXTYPE__": "voxel";
    "position": Array<number>;
    "value": number;
}


interface MreditConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface MreditParameters {
    "__STYXTYPE__": "mredit";
    "plane"?: Array<MreditPlaneParameters> | null | undefined;
    "sphere"?: Array<MreditSphereParameters> | null | undefined;
    "voxel"?: Array<MreditVoxelParameters> | null | undefined;
    "scanner": boolean;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<MreditConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
    "output"?: string | null | undefined;
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
        "mredit": mredit_cargs,
        "plane": mredit_plane_cargs,
        "sphere": mredit_sphere_cargs,
        "voxel": mredit_voxel_cargs,
        "config": mredit_config_cargs,
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
        "mredit": mredit_outputs,
    };
    return outputsFuncs[t];
}


function mredit_plane_params(
    axis: number,
    coord: Array<number>,
    value: number,
): MreditPlaneParameters {
    /**
     * Build parameters.
    
     * @param axis fill one or more planes on a particular image axis
     * @param coord fill one or more planes on a particular image axis
     * @param value fill one or more planes on a particular image axis
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "plane" as const,
        "axis": axis,
        "coord": coord,
        "value": value,
    };
    return params;
}


function mredit_plane_cargs(
    params: MreditPlaneParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-plane");
    cargs.push(String((params["axis"] ?? null)));
    cargs.push(...(params["coord"] ?? null).map(String));
    cargs.push(String((params["value"] ?? null)));
    return cargs;
}


function mredit_sphere_params(
    position: Array<number>,
    radius: number,
    value: number,
): MreditSphereParameters {
    /**
     * Build parameters.
    
     * @param position draw a sphere with radius in mm
     * @param radius draw a sphere with radius in mm
     * @param value draw a sphere with radius in mm
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "sphere" as const,
        "position": position,
        "radius": radius,
        "value": value,
    };
    return params;
}


function mredit_sphere_cargs(
    params: MreditSphereParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-sphere");
    cargs.push(...(params["position"] ?? null).map(String));
    cargs.push(String((params["radius"] ?? null)));
    cargs.push(String((params["value"] ?? null)));
    return cargs;
}


function mredit_voxel_params(
    position: Array<number>,
    value: number,
): MreditVoxelParameters {
    /**
     * Build parameters.
    
     * @param position change the image value within a single voxel
     * @param value change the image value within a single voxel
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "voxel" as const,
        "position": position,
        "value": value,
    };
    return params;
}


function mredit_voxel_cargs(
    params: MreditVoxelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-voxel");
    cargs.push(...(params["position"] ?? null).map(String));
    cargs.push(String((params["value"] ?? null)));
    return cargs;
}


function mredit_config_params(
    key: string,
    value: string,
): MreditConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function mredit_config_cargs(
    params: MreditConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `mredit(...)`.
 *
 * @interface
 */
interface MreditOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the (optional) output image
     */
    output: OutputPathType | null;
}


function mredit_params(
    input: InputPathType,
    plane: Array<MreditPlaneParameters> | null = null,
    sphere: Array<MreditSphereParameters> | null = null,
    voxel: Array<MreditVoxelParameters> | null = null,
    scanner: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MreditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    output: string | null = null,
): MreditParameters {
    /**
     * Build parameters.
    
     * @param input the input image
     * @param plane fill one or more planes on a particular image axis
     * @param sphere draw a sphere with radius in mm
     * @param voxel change the image value within a single voxel
     * @param scanner indicate that coordinates are specified in scanner space, rather than as voxel coordinates
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param output the (optional) output image
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mredit" as const,
        "scanner": scanner,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
    };
    if (plane !== null) {
        params["plane"] = plane;
    }
    if (sphere !== null) {
        params["sphere"] = sphere;
    }
    if (voxel !== null) {
        params["voxel"] = voxel;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    if (output !== null) {
        params["output"] = output;
    }
    return params;
}


function mredit_cargs(
    params: MreditParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mredit");
    if ((params["plane"] ?? null) !== null) {
        cargs.push(...(params["plane"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["sphere"] ?? null) !== null) {
        cargs.push(...(params["sphere"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["voxel"] ?? null) !== null) {
        cargs.push(...(params["voxel"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["scanner"] ?? null)) {
        cargs.push("-scanner");
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["output"] ?? null) !== null) {
        cargs.push((params["output"] ?? null));
    }
    return cargs;
}


function mredit_outputs(
    params: MreditParameters,
    execution: Execution,
): MreditOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MreditOutputs = {
        root: execution.outputFile("."),
        output: ((params["output"] ?? null) !== null) ? execution.outputFile([(params["output"] ?? null)].join('')) : null,
    };
    return ret;
}


function mredit_execute(
    params: MreditParameters,
    execution: Execution,
): MreditOutputs {
    /**
     * Directly edit the intensities within an image from the command-line.
     * 
     * A range of options are provided to enable direct editing of voxel intensities based on voxel / real-space coordinates. If only one image path is provided, the image will be edited in-place (use at own risk); if input and output image paths are provided, the output will contain the edited image, and the original image will not be modified in any way.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MreditOutputs`).
     */
    params = execution.params(params)
    const cargs = mredit_cargs(params, execution)
    const ret = mredit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mredit(
    input: InputPathType,
    plane: Array<MreditPlaneParameters> | null = null,
    sphere: Array<MreditSphereParameters> | null = null,
    voxel: Array<MreditVoxelParameters> | null = null,
    scanner: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MreditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    output: string | null = null,
    runner: Runner | null = null,
): MreditOutputs {
    /**
     * Directly edit the intensities within an image from the command-line.
     * 
     * A range of options are provided to enable direct editing of voxel intensities based on voxel / real-space coordinates. If only one image path is provided, the image will be edited in-place (use at own risk); if input and output image paths are provided, the output will contain the edited image, and the original image will not be modified in any way.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input the input image
     * @param plane fill one or more planes on a particular image axis
     * @param sphere draw a sphere with radius in mm
     * @param voxel change the image value within a single voxel
     * @param scanner indicate that coordinates are specified in scanner space, rather than as voxel coordinates
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param output the (optional) output image
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MreditOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MREDIT_METADATA);
    const params = mredit_params(input, plane, sphere, voxel, scanner, info, quiet, debug, force, nthreads, config, help, version, output)
    return mredit_execute(params, execution);
}


export {
      MREDIT_METADATA,
      MreditConfigParameters,
      MreditOutputs,
      MreditParameters,
      MreditPlaneParameters,
      MreditSphereParameters,
      MreditVoxelParameters,
      mredit,
      mredit_config_params,
      mredit_params,
      mredit_plane_params,
      mredit_sphere_params,
      mredit_voxel_params,
};
