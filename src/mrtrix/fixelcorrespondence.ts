// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIXELCORRESPONDENCE_METADATA: Metadata = {
    id: "fad1be9b8243f83bbbf677ed7d4db5308a7e3c5d.boutiques",
    name: "fixelcorrespondence",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface FixelcorrespondenceConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface FixelcorrespondenceParameters {
    "__STYXTYPE__": "fixelcorrespondence";
    "angle"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<FixelcorrespondenceConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "subject_data": InputPathType;
    "template_directory": InputPathType;
    "output_directory": string;
    "output_data": string;
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
        "fixelcorrespondence": fixelcorrespondence_cargs,
        "config": fixelcorrespondence_config_cargs,
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


function fixelcorrespondence_config_params(
    key: string,
    value: string,
): FixelcorrespondenceConfigParameters {
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


function fixelcorrespondence_config_cargs(
    params: FixelcorrespondenceConfigParameters,
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
 * Output object returned when calling `fixelcorrespondence(...)`.
 *
 * @interface
 */
interface FixelcorrespondenceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fixelcorrespondence_params(
    subject_data: InputPathType,
    template_directory: InputPathType,
    output_directory: string,
    output_data: string,
    angle: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelcorrespondenceConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): FixelcorrespondenceParameters {
    /**
     * Build parameters.
    
     * @param subject_data the input subject fixel data file. This should be a file inside the fixel directory
     * @param template_directory the input template fixel directory.
     * @param output_directory the fixel directory where the output file will be written.
     * @param output_data the name of the output fixel data file. This will be placed in the output fixel directory
     * @param angle the max angle threshold for computing inter-subject fixel correspondence (Default: 45 degrees)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fixelcorrespondence" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "subject_data": subject_data,
        "template_directory": template_directory,
        "output_directory": output_directory,
        "output_data": output_data,
    };
    if (angle !== null) {
        params["angle"] = angle;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function fixelcorrespondence_cargs(
    params: FixelcorrespondenceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fixelcorrespondence");
    if ((params["angle"] ?? null) !== null) {
        cargs.push(
            "-angle",
            String((params["angle"] ?? null))
        );
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
    cargs.push(execution.inputFile((params["subject_data"] ?? null)));
    cargs.push(execution.inputFile((params["template_directory"] ?? null)));
    cargs.push((params["output_directory"] ?? null));
    cargs.push((params["output_data"] ?? null));
    return cargs;
}


function fixelcorrespondence_outputs(
    params: FixelcorrespondenceParameters,
    execution: Execution,
): FixelcorrespondenceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FixelcorrespondenceOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fixelcorrespondence_execute(
    params: FixelcorrespondenceParameters,
    execution: Execution,
): FixelcorrespondenceOutputs {
    /**
     * Obtain fixel-fixel correpondence between a subject fixel image and a template fixel mask.
     * 
     * It is assumed that the subject image has already been spatially normalised and is aligned with the template. The output fixel image will have the same fixels (and directions) of the template.
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
    
     * @returns NamedTuple of outputs (described in `FixelcorrespondenceOutputs`).
     */
    params = execution.params(params)
    const cargs = fixelcorrespondence_cargs(params, execution)
    const ret = fixelcorrespondence_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fixelcorrespondence(
    subject_data: InputPathType,
    template_directory: InputPathType,
    output_directory: string,
    output_data: string,
    angle: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelcorrespondenceConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): FixelcorrespondenceOutputs {
    /**
     * Obtain fixel-fixel correpondence between a subject fixel image and a template fixel mask.
     * 
     * It is assumed that the subject image has already been spatially normalised and is aligned with the template. The output fixel image will have the same fixels (and directions) of the template.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param subject_data the input subject fixel data file. This should be a file inside the fixel directory
     * @param template_directory the input template fixel directory.
     * @param output_directory the fixel directory where the output file will be written.
     * @param output_data the name of the output fixel data file. This will be placed in the output fixel directory
     * @param angle the max angle threshold for computing inter-subject fixel correspondence (Default: 45 degrees)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FixelcorrespondenceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIXELCORRESPONDENCE_METADATA);
    const params = fixelcorrespondence_params(subject_data, template_directory, output_directory, output_data, angle, info, quiet, debug, force, nthreads, config, help, version)
    return fixelcorrespondence_execute(params, execution);
}


export {
      FIXELCORRESPONDENCE_METADATA,
      FixelcorrespondenceConfigParameters,
      FixelcorrespondenceOutputs,
      FixelcorrespondenceParameters,
      fixelcorrespondence,
      fixelcorrespondence_config_params,
      fixelcorrespondence_params,
};
