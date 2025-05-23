// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const WARP2METRIC_METADATA: Metadata = {
    id: "eefc64bdbf00cdc4394ee65fe8d05cf1a06e7ae9.boutiques",
    name: "warp2metric",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Warp2metricFcParameters {
    "__STYXTYPE__": "fc";
    "template_fixel_directory": InputPathType;
    "output_fixel_directory": string;
    "output_fixel_data": string;
}


interface Warp2metricConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Warp2metricParameters {
    "__STYXTYPE__": "warp2metric";
    "fc"?: Warp2metricFcParameters | null | undefined;
    "jmat"?: string | null | undefined;
    "jdet"?: string | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Warp2metricConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "in": InputPathType;
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
        "warp2metric": warp2metric_cargs,
        "fc": warp2metric_fc_cargs,
        "config": warp2metric_config_cargs,
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
        "warp2metric": warp2metric_outputs,
    };
    return outputsFuncs[t];
}


function warp2metric_fc_params(
    template_fixel_directory: InputPathType,
    output_fixel_directory: string,
    output_fixel_data: string,
): Warp2metricFcParameters {
    /**
     * Build parameters.
    
     * @param template_fixel_directory use an input template fixel image to define fibre orientations and output a fixel image describing the change in fibre cross-section (FC) in the perpendicular plane to the fixel orientation. e.g. warp2metric warp.mif -fc fixel_template_directory output_fixel_directory fc.mif
     * @param output_fixel_directory use an input template fixel image to define fibre orientations and output a fixel image describing the change in fibre cross-section (FC) in the perpendicular plane to the fixel orientation. e.g. warp2metric warp.mif -fc fixel_template_directory output_fixel_directory fc.mif
     * @param output_fixel_data use an input template fixel image to define fibre orientations and output a fixel image describing the change in fibre cross-section (FC) in the perpendicular plane to the fixel orientation. e.g. warp2metric warp.mif -fc fixel_template_directory output_fixel_directory fc.mif
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fc" as const,
        "template_fixel_directory": template_fixel_directory,
        "output_fixel_directory": output_fixel_directory,
        "output_fixel_data": output_fixel_data,
    };
    return params;
}


function warp2metric_fc_cargs(
    params: Warp2metricFcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-fc");
    cargs.push(execution.inputFile((params["template_fixel_directory"] ?? null)));
    cargs.push((params["output_fixel_directory"] ?? null));
    cargs.push((params["output_fixel_data"] ?? null));
    return cargs;
}


function warp2metric_config_params(
    key: string,
    value: string,
): Warp2metricConfigParameters {
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


function warp2metric_config_cargs(
    params: Warp2metricConfigParameters,
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
 * Output object returned when calling `warp2metric(...)`.
 *
 * @interface
 */
interface Warp2metricOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * output a Jacobian matrix image stored in column-major order along the 4th dimension.Note the output jacobian describes the warp gradient w.r.t the scanner space coordinate system 
     */
    jmat: OutputPathType | null;
    /**
     * output the Jacobian determinant instead of the full matrix 
     */
    jdet: OutputPathType | null;
}


function warp2metric_params(
    in_: InputPathType,
    fc: Warp2metricFcParameters | null = null,
    jmat: string | null = null,
    jdet: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Warp2metricConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Warp2metricParameters {
    /**
     * Build parameters.
    
     * @param in_ the input deformation field
     * @param fc use an input template fixel image to define fibre orientations and output a fixel image describing the change in fibre cross-section (FC) in the perpendicular plane to the fixel orientation. e.g. warp2metric warp.mif -fc fixel_template_directory output_fixel_directory fc.mif
     * @param jmat output a Jacobian matrix image stored in column-major order along the 4th dimension.Note the output jacobian describes the warp gradient w.r.t the scanner space coordinate system
     * @param jdet output the Jacobian determinant instead of the full matrix
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
        "__STYXTYPE__": "warp2metric" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "in": in_,
    };
    if (fc !== null) {
        params["fc"] = fc;
    }
    if (jmat !== null) {
        params["jmat"] = jmat;
    }
    if (jdet !== null) {
        params["jdet"] = jdet;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function warp2metric_cargs(
    params: Warp2metricParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("warp2metric");
    if ((params["fc"] ?? null) !== null) {
        cargs.push(...dynCargs((params["fc"] ?? null).__STYXTYPE__)((params["fc"] ?? null), execution));
    }
    if ((params["jmat"] ?? null) !== null) {
        cargs.push(
            "-jmat",
            (params["jmat"] ?? null)
        );
    }
    if ((params["jdet"] ?? null) !== null) {
        cargs.push(
            "-jdet",
            (params["jdet"] ?? null)
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
    cargs.push(execution.inputFile((params["in"] ?? null)));
    return cargs;
}


function warp2metric_outputs(
    params: Warp2metricParameters,
    execution: Execution,
): Warp2metricOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Warp2metricOutputs = {
        root: execution.outputFile("."),
        jmat: ((params["jmat"] ?? null) !== null) ? execution.outputFile([(params["jmat"] ?? null)].join('')) : null,
        jdet: ((params["jdet"] ?? null) !== null) ? execution.outputFile([(params["jdet"] ?? null)].join('')) : null,
    };
    return ret;
}


function warp2metric_execute(
    params: Warp2metricParameters,
    execution: Execution,
): Warp2metricOutputs {
    /**
     * Compute fixel-wise or voxel-wise metrics from a 4D deformation field.
     * 
     * 
     * 
     * References:
     * 
     * Raffelt, D.; Tournier, JD/; Smith, RE.; Vaughan, DN.; Jackson, G.; Ridgway, GR. Connelly, A.Investigating White Matter Fibre Density and Morphology using Fixel-Based Analysis. Neuroimage, 2017, 144, 58-73, doi: 10.1016/j.neuroimage.2016.09.029.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Warp2metricOutputs`).
     */
    params = execution.params(params)
    const cargs = warp2metric_cargs(params, execution)
    const ret = warp2metric_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function warp2metric(
    in_: InputPathType,
    fc: Warp2metricFcParameters | null = null,
    jmat: string | null = null,
    jdet: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Warp2metricConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Warp2metricOutputs {
    /**
     * Compute fixel-wise or voxel-wise metrics from a 4D deformation field.
     * 
     * 
     * 
     * References:
     * 
     * Raffelt, D.; Tournier, JD/; Smith, RE.; Vaughan, DN.; Jackson, G.; Ridgway, GR. Connelly, A.Investigating White Matter Fibre Density and Morphology using Fixel-Based Analysis. Neuroimage, 2017, 144, 58-73, doi: 10.1016/j.neuroimage.2016.09.029.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param in_ the input deformation field
     * @param fc use an input template fixel image to define fibre orientations and output a fixel image describing the change in fibre cross-section (FC) in the perpendicular plane to the fixel orientation. e.g. warp2metric warp.mif -fc fixel_template_directory output_fixel_directory fc.mif
     * @param jmat output a Jacobian matrix image stored in column-major order along the 4th dimension.Note the output jacobian describes the warp gradient w.r.t the scanner space coordinate system
     * @param jdet output the Jacobian determinant instead of the full matrix
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Warp2metricOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(WARP2METRIC_METADATA);
    const params = warp2metric_params(in_, fc, jmat, jdet, info, quiet, debug, force, nthreads, config, help, version)
    return warp2metric_execute(params, execution);
}


export {
      WARP2METRIC_METADATA,
      Warp2metricConfigParameters,
      Warp2metricFcParameters,
      Warp2metricOutputs,
      Warp2metricParameters,
      warp2metric,
      warp2metric_config_params,
      warp2metric_fc_params,
      warp2metric_params,
};
