// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIXEL2VOXEL_METADATA: Metadata = {
    id: "5fccec41beac5ebb945c548f352825b1de7de1ba.boutiques",
    name: "fixel2voxel",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface Fixel2voxelConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface Fixel2voxelParameters {
    "__STYXTYPE__": "fixel2voxel";
    "number"?: number | null | undefined;
    "fill"?: number | null | undefined;
    "weighted"?: InputPathType | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<Fixel2voxelConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "fixel_in": InputPathType;
    "operation": string;
    "image_out": string;
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
        "fixel2voxel": fixel2voxel_cargs,
        "config": fixel2voxel_config_cargs,
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
        "fixel2voxel": fixel2voxel_outputs,
    };
    return outputsFuncs[t];
}


function fixel2voxel_config_params(
    key: string,
    value: string,
): Fixel2voxelConfigParameters {
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


function fixel2voxel_config_cargs(
    params: Fixel2voxelConfigParameters,
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
 * Output object returned when calling `fixel2voxel(...)`.
 *
 * @interface
 */
interface Fixel2voxelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output scalar image.
     */
    image_out: OutputPathType;
}


function fixel2voxel_params(
    fixel_in: InputPathType,
    operation: string,
    image_out: string,
    number_: number | null = null,
    fill: number | null = null,
    weighted: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Fixel2voxelConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): Fixel2voxelParameters {
    /**
     * Build parameters.
    
     * @param fixel_in the input fixel data file
     * @param operation the operation to apply, one of: mean, sum, product, min, max, absmax, magmax, count, complexity, sf, dec_unit, dec_scaled, none.
     * @param image_out the output scalar image.
     * @param number_ use only the largest N fixels in calculation of the voxel-wise statistic; in the case of operation "none", output only the largest N fixels in each voxel.
     * @param fill for "none" operation, specify the value to fill when number of fixels is fewer than the maximum (default: 0.0)
     * @param weighted weight the contribution of each fixel to the per-voxel result according to its volume.
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
        "__STYXTYPE__": "fixel2voxel" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "fixel_in": fixel_in,
        "operation": operation,
        "image_out": image_out,
    };
    if (number_ !== null) {
        params["number"] = number_;
    }
    if (fill !== null) {
        params["fill"] = fill;
    }
    if (weighted !== null) {
        params["weighted"] = weighted;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function fixel2voxel_cargs(
    params: Fixel2voxelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fixel2voxel");
    if ((params["number"] ?? null) !== null) {
        cargs.push(
            "-number",
            String((params["number"] ?? null))
        );
    }
    if ((params["fill"] ?? null) !== null) {
        cargs.push(
            "-fill",
            String((params["fill"] ?? null))
        );
    }
    if ((params["weighted"] ?? null) !== null) {
        cargs.push(
            "-weighted",
            execution.inputFile((params["weighted"] ?? null))
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
    cargs.push(execution.inputFile((params["fixel_in"] ?? null)));
    cargs.push((params["operation"] ?? null));
    cargs.push((params["image_out"] ?? null));
    return cargs;
}


function fixel2voxel_outputs(
    params: Fixel2voxelParameters,
    execution: Execution,
): Fixel2voxelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Fixel2voxelOutputs = {
        root: execution.outputFile("."),
        image_out: execution.outputFile([(params["image_out"] ?? null)].join('')),
    };
    return ret;
}


function fixel2voxel_execute(
    params: Fixel2voxelParameters,
    execution: Execution,
): Fixel2voxelOutputs {
    /**
     * Convert a fixel-based sparse-data image into some form of scalar image.
     * 
     * Fixel data can be reduced to voxel data in a number of ways:
     * 
     * - Some statistic computed across all fixel values within a voxel: mean, sum, product, min, max, absmax, magmax
     * 
     * - The number of fixels in each voxel: count
     * 
     * - Some measure of crossing-fibre organisation: complexity, sf ('single-fibre')
     * 
     * - A 4D directionally-encoded colour image: dec_unit, dec_scaled
     * 
     * - A 4D image containing all fixel data values in each voxel unmodified: none
     * 
     * The -weighted option deals with the case where there is some per-fixel metric of interest that you wish to collapse into a single scalar measure per voxel, but each fixel possesses a different volume, and you wish for those fixels with greater volume to have a greater influence on the calculation than fixels with lesser volume. For instance, when estimating a voxel-based measure of mean axon diameter from per-fixel mean axon diameters, a fixel's mean axon diameter should be weigthed by its relative volume within the voxel in the calculation of that voxel mean.
     * 
     * References:
     * 
     * * Reference for 'complexity' operation:
     * Riffert, T. W.; Schreiber, J.; Anwander, A. & Knosche, T. R. Beyond Fractional Anisotropy: Extraction of bundle-specific structural metrics from crossing fibre models. NeuroImage, 2014, 100, 176-191.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Fixel2voxelOutputs`).
     */
    params = execution.params(params)
    const cargs = fixel2voxel_cargs(params, execution)
    const ret = fixel2voxel_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fixel2voxel(
    fixel_in: InputPathType,
    operation: string,
    image_out: string,
    number_: number | null = null,
    fill: number | null = null,
    weighted: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<Fixel2voxelConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Fixel2voxelOutputs {
    /**
     * Convert a fixel-based sparse-data image into some form of scalar image.
     * 
     * Fixel data can be reduced to voxel data in a number of ways:
     * 
     * - Some statistic computed across all fixel values within a voxel: mean, sum, product, min, max, absmax, magmax
     * 
     * - The number of fixels in each voxel: count
     * 
     * - Some measure of crossing-fibre organisation: complexity, sf ('single-fibre')
     * 
     * - A 4D directionally-encoded colour image: dec_unit, dec_scaled
     * 
     * - A 4D image containing all fixel data values in each voxel unmodified: none
     * 
     * The -weighted option deals with the case where there is some per-fixel metric of interest that you wish to collapse into a single scalar measure per voxel, but each fixel possesses a different volume, and you wish for those fixels with greater volume to have a greater influence on the calculation than fixels with lesser volume. For instance, when estimating a voxel-based measure of mean axon diameter from per-fixel mean axon diameters, a fixel's mean axon diameter should be weigthed by its relative volume within the voxel in the calculation of that voxel mean.
     * 
     * References:
     * 
     * * Reference for 'complexity' operation:
     * Riffert, T. W.; Schreiber, J.; Anwander, A. & Knosche, T. R. Beyond Fractional Anisotropy: Extraction of bundle-specific structural metrics from crossing fibre models. NeuroImage, 2014, 100, 176-191.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param fixel_in the input fixel data file
     * @param operation the operation to apply, one of: mean, sum, product, min, max, absmax, magmax, count, complexity, sf, dec_unit, dec_scaled, none.
     * @param image_out the output scalar image.
     * @param number_ use only the largest N fixels in calculation of the voxel-wise statistic; in the case of operation "none", output only the largest N fixels in each voxel.
     * @param fill for "none" operation, specify the value to fill when number of fixels is fewer than the maximum (default: 0.0)
     * @param weighted weight the contribution of each fixel to the per-voxel result according to its volume.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Fixel2voxelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIXEL2VOXEL_METADATA);
    const params = fixel2voxel_params(fixel_in, operation, image_out, number_, fill, weighted, info, quiet, debug, force, nthreads, config, help, version)
    return fixel2voxel_execute(params, execution);
}


export {
      FIXEL2VOXEL_METADATA,
      Fixel2voxelConfigParameters,
      Fixel2voxelOutputs,
      Fixel2voxelParameters,
      fixel2voxel,
      fixel2voxel_config_params,
      fixel2voxel_params,
};
