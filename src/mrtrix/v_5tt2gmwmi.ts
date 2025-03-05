// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_5TT2GMWMI_METADATA: Metadata = {
    id: "0ee6033ccf738011cdec5b8ea67b162a89b7d0c3.boutiques",
    name: "5tt2gmwmi",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface V5tt2gmwmiConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface V5tt2gmwmiParameters {
    "__STYXTYPE__": "5tt2gmwmi";
    "mask_in"?: InputPathType | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<V5tt2gmwmiConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "5tt_in": InputPathType;
    "mask_out": string;
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
        "5tt2gmwmi": v_5tt2gmwmi_cargs,
        "config": v_5tt2gmwmi_config_cargs,
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
        "5tt2gmwmi": v_5tt2gmwmi_outputs,
    };
    return outputsFuncs[t];
}


function v_5tt2gmwmi_config_params(
    key: string,
    value: string,
): V5tt2gmwmiConfigParameters {
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


function v_5tt2gmwmi_config_cargs(
    params: V5tt2gmwmiConfigParameters,
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
 * Output object returned when calling `v_5tt2gmwmi(...)`.
 *
 * @interface
 */
interface V5tt2gmwmiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output mask image
     */
    mask_out: OutputPathType;
}


function v_5tt2gmwmi_params(
    v_5tt_in: InputPathType,
    mask_out: string,
    mask_in: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<V5tt2gmwmiConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): V5tt2gmwmiParameters {
    /**
     * Build parameters.
    
     * @param v_5tt_in the input 5TT segmented anatomical image
     * @param mask_out the output mask image
     * @param mask_in Filter an input mask image according to those voxels that lie upon the grey matter - white matter boundary. If no input mask is provided, the output will be a whole-brain mask image calculated using the anatomical image only.
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
        "__STYXTYPE__": "5tt2gmwmi" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "5tt_in": v_5tt_in,
        "mask_out": mask_out,
    };
    if (mask_in !== null) {
        params["mask_in"] = mask_in;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function v_5tt2gmwmi_cargs(
    params: V5tt2gmwmiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("5tt2gmwmi");
    if ((params["mask_in"] ?? null) !== null) {
        cargs.push(
            "-mask_in",
            execution.inputFile((params["mask_in"] ?? null))
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
    cargs.push(execution.inputFile((params["5tt_in"] ?? null)));
    cargs.push((params["mask_out"] ?? null));
    return cargs;
}


function v_5tt2gmwmi_outputs(
    params: V5tt2gmwmiParameters,
    execution: Execution,
): V5tt2gmwmiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V5tt2gmwmiOutputs = {
        root: execution.outputFile("."),
        mask_out: execution.outputFile([(params["mask_out"] ?? null)].join('')),
    };
    return ret;
}


function v_5tt2gmwmi_execute(
    params: V5tt2gmwmiParameters,
    execution: Execution,
): V5tt2gmwmiOutputs {
    /**
     * Generate a mask image appropriate for seeding streamlines on the grey matter-white matter interface.
     * 
     * 
     * 
     * References:
     * 
     * Smith, R. E.; Tournier, J.-D.; Calamante, F. & Connelly, A. Anatomically-constrained tractography:Improved diffusion MRI streamlines tractography through effective use of anatomical information. NeuroImage, 2012, 62, 1924-1938.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V5tt2gmwmiOutputs`).
     */
    params = execution.params(params)
    const cargs = v_5tt2gmwmi_cargs(params, execution)
    const ret = v_5tt2gmwmi_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_5tt2gmwmi(
    v_5tt_in: InputPathType,
    mask_out: string,
    mask_in: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<V5tt2gmwmiConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): V5tt2gmwmiOutputs {
    /**
     * Generate a mask image appropriate for seeding streamlines on the grey matter-white matter interface.
     * 
     * 
     * 
     * References:
     * 
     * Smith, R. E.; Tournier, J.-D.; Calamante, F. & Connelly, A. Anatomically-constrained tractography:Improved diffusion MRI streamlines tractography through effective use of anatomical information. NeuroImage, 2012, 62, 1924-1938.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param v_5tt_in the input 5TT segmented anatomical image
     * @param mask_out the output mask image
     * @param mask_in Filter an input mask image according to those voxels that lie upon the grey matter - white matter boundary. If no input mask is provided, the output will be a whole-brain mask image calculated using the anatomical image only.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V5tt2gmwmiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_5TT2GMWMI_METADATA);
    const params = v_5tt2gmwmi_params(v_5tt_in, mask_out, mask_in, info, quiet, debug, force, nthreads, config, help, version)
    return v_5tt2gmwmi_execute(params, execution);
}


export {
      V5tt2gmwmiConfigParameters,
      V5tt2gmwmiOutputs,
      V5tt2gmwmiParameters,
      V_5TT2GMWMI_METADATA,
      v_5tt2gmwmi,
      v_5tt2gmwmi_config_params,
      v_5tt2gmwmi_params,
};
