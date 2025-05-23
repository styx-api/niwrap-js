// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TCKDFC_METADATA: Metadata = {
    id: "d063ae0a6f752adeb538e136080ae7c0b19dd04e.boutiques",
    name: "tckdfc",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TckdfcDynamicParameters {
    "__STYXTYPE__": "dynamic";
    "shape": string;
    "width": number;
}


interface TckdfcConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TckdfcParameters {
    "__STYXTYPE__": "tckdfc";
    "static": boolean;
    "dynamic"?: TckdfcDynamicParameters | null | undefined;
    "template"?: InputPathType | null | undefined;
    "vox"?: Array<number> | null | undefined;
    "stat_vox"?: string | null | undefined;
    "backtrack": boolean;
    "upsample"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TckdfcConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "tracks": InputPathType;
    "fmri": InputPathType;
    "output": string;
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
        "tckdfc": tckdfc_cargs,
        "dynamic": tckdfc_dynamic_cargs,
        "config": tckdfc_config_cargs,
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
        "tckdfc": tckdfc_outputs,
    };
    return outputsFuncs[t];
}


function tckdfc_dynamic_params(
    shape: string,
    width: number,
): TckdfcDynamicParameters {
    /**
     * Build parameters.
    
     * @param shape generate a "dynamic" (4D) output image; must additionally provide the shape and width (in volumes) of the sliding window.
     * @param width generate a "dynamic" (4D) output image; must additionally provide the shape and width (in volumes) of the sliding window.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dynamic" as const,
        "shape": shape,
        "width": width,
    };
    return params;
}


function tckdfc_dynamic_cargs(
    params: TckdfcDynamicParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-dynamic");
    cargs.push((params["shape"] ?? null));
    cargs.push(String((params["width"] ?? null)));
    return cargs;
}


function tckdfc_config_params(
    key: string,
    value: string,
): TckdfcConfigParameters {
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


function tckdfc_config_cargs(
    params: TckdfcConfigParameters,
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
 * Output object returned when calling `tckdfc(...)`.
 *
 * @interface
 */
interface TckdfcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output TW-dFC image
     */
    output: OutputPathType;
}


function tckdfc_params(
    tracks: InputPathType,
    fmri: InputPathType,
    output: string,
    static_: boolean = false,
    dynamic: TckdfcDynamicParameters | null = null,
    template: InputPathType | null = null,
    vox: Array<number> | null = null,
    stat_vox: string | null = null,
    backtrack: boolean = false,
    upsample: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckdfcConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TckdfcParameters {
    /**
     * Build parameters.
    
     * @param tracks the input track file.
     * @param fmri the pre-processed fMRI time series
     * @param output the output TW-dFC image
     * @param static_ generate a "static" (3D) output image.
     * @param dynamic generate a "dynamic" (4D) output image; must additionally provide the shape and width (in volumes) of the sliding window.
     * @param template an image file to be used as a template for the output (the output image will have the same transform and field of view).
     * @param vox provide either an isotropic voxel size (in mm), or comma-separated list of 3 voxel dimensions.
     * @param stat_vox define the statistic for choosing the final voxel intensities for a given contrast type given the individual values from the tracks passing through each voxel
Options are: sum, min, mean, max (default: mean)
     * @param backtrack if no valid timeseries is found at the streamline endpoint, back-track along the streamline trajectory until a valid timeseries is found
     * @param upsample upsample the tracks by some ratio using Hermite interpolation before mapping (if omitted, an appropriate ratio will be determined automatically)
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
        "__STYXTYPE__": "tckdfc" as const,
        "static": static_,
        "backtrack": backtrack,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "tracks": tracks,
        "fmri": fmri,
        "output": output,
    };
    if (dynamic !== null) {
        params["dynamic"] = dynamic;
    }
    if (template !== null) {
        params["template"] = template;
    }
    if (vox !== null) {
        params["vox"] = vox;
    }
    if (stat_vox !== null) {
        params["stat_vox"] = stat_vox;
    }
    if (upsample !== null) {
        params["upsample"] = upsample;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tckdfc_cargs(
    params: TckdfcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tckdfc");
    if ((params["static"] ?? null)) {
        cargs.push("-static");
    }
    if ((params["dynamic"] ?? null) !== null) {
        cargs.push(...dynCargs((params["dynamic"] ?? null).__STYXTYPE__)((params["dynamic"] ?? null), execution));
    }
    if ((params["template"] ?? null) !== null) {
        cargs.push(
            "-template",
            execution.inputFile((params["template"] ?? null))
        );
    }
    if ((params["vox"] ?? null) !== null) {
        cargs.push(
            "-vox",
            (params["vox"] ?? null).map(String).join(",")
        );
    }
    if ((params["stat_vox"] ?? null) !== null) {
        cargs.push(
            "-stat_vox",
            (params["stat_vox"] ?? null)
        );
    }
    if ((params["backtrack"] ?? null)) {
        cargs.push("-backtrack");
    }
    if ((params["upsample"] ?? null) !== null) {
        cargs.push(
            "-upsample",
            String((params["upsample"] ?? null))
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
    cargs.push(execution.inputFile((params["tracks"] ?? null)));
    cargs.push(execution.inputFile((params["fmri"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function tckdfc_outputs(
    params: TckdfcParameters,
    execution: Execution,
): TckdfcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TckdfcOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function tckdfc_execute(
    params: TckdfcParameters,
    execution: Execution,
): TckdfcOutputs {
    /**
     * Perform the Track-Weighted Dynamic Functional Connectivity (TW-dFC) method.
     * 
     * This command generates a Track-Weighted Image (TWI), where the contribution from each streamline to the image is the Pearson correlation between the fMRI time series at the streamline endpoints.
     * 
     * The output image can be generated in one of two ways (note that one of these two command-line options MUST be provided): 
     * 
     * - "Static" functional connectivity (-static option): Each streamline contributes to a static 3D output image based on the correlation between the signals at the streamline endpoints using the entirety of the input time series.
     * 
     * - "Dynamic" functional connectivity (-dynamic option): The output image is a 4D image, with the same number of volumes as the input fMRI time series. For each volume, the contribution from each streamline is calculated based on a finite-width sliding time window, centred at the timepoint corresponding to that volume.
     * 
     * Note that the -backtrack option in this command is similar, but not precisely equivalent, to back-tracking as can be used with Anatomically-Constrained Tractography (ACT) in the tckgen command. However, here the feature does not change the streamlines trajectories in any way; it simply enables detection of the fact that the input fMRI image may not contain a valid timeseries underneath the streamline endpoint, and where this occurs, searches from the streamline endpoint inwards along the streamline trajectory in search of a valid timeseries to sample from the input image.
     * 
     * References:
     * 
     * Calamante, F.; Smith, R.E.; Liang, X.; Zalesky, A.; Connelly, A Track-weighted dynamic functional connectivity (TW-dFC): a new method to study time-resolved functional connectivity. Brain Struct Funct, 2017, doi: 10.1007/s00429-017-1431-1.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TckdfcOutputs`).
     */
    params = execution.params(params)
    const cargs = tckdfc_cargs(params, execution)
    const ret = tckdfc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tckdfc(
    tracks: InputPathType,
    fmri: InputPathType,
    output: string,
    static_: boolean = false,
    dynamic: TckdfcDynamicParameters | null = null,
    template: InputPathType | null = null,
    vox: Array<number> | null = null,
    stat_vox: string | null = null,
    backtrack: boolean = false,
    upsample: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckdfcConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TckdfcOutputs {
    /**
     * Perform the Track-Weighted Dynamic Functional Connectivity (TW-dFC) method.
     * 
     * This command generates a Track-Weighted Image (TWI), where the contribution from each streamline to the image is the Pearson correlation between the fMRI time series at the streamline endpoints.
     * 
     * The output image can be generated in one of two ways (note that one of these two command-line options MUST be provided): 
     * 
     * - "Static" functional connectivity (-static option): Each streamline contributes to a static 3D output image based on the correlation between the signals at the streamline endpoints using the entirety of the input time series.
     * 
     * - "Dynamic" functional connectivity (-dynamic option): The output image is a 4D image, with the same number of volumes as the input fMRI time series. For each volume, the contribution from each streamline is calculated based on a finite-width sliding time window, centred at the timepoint corresponding to that volume.
     * 
     * Note that the -backtrack option in this command is similar, but not precisely equivalent, to back-tracking as can be used with Anatomically-Constrained Tractography (ACT) in the tckgen command. However, here the feature does not change the streamlines trajectories in any way; it simply enables detection of the fact that the input fMRI image may not contain a valid timeseries underneath the streamline endpoint, and where this occurs, searches from the streamline endpoint inwards along the streamline trajectory in search of a valid timeseries to sample from the input image.
     * 
     * References:
     * 
     * Calamante, F.; Smith, R.E.; Liang, X.; Zalesky, A.; Connelly, A Track-weighted dynamic functional connectivity (TW-dFC): a new method to study time-resolved functional connectivity. Brain Struct Funct, 2017, doi: 10.1007/s00429-017-1431-1.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param tracks the input track file.
     * @param fmri the pre-processed fMRI time series
     * @param output the output TW-dFC image
     * @param static_ generate a "static" (3D) output image.
     * @param dynamic generate a "dynamic" (4D) output image; must additionally provide the shape and width (in volumes) of the sliding window.
     * @param template an image file to be used as a template for the output (the output image will have the same transform and field of view).
     * @param vox provide either an isotropic voxel size (in mm), or comma-separated list of 3 voxel dimensions.
     * @param stat_vox define the statistic for choosing the final voxel intensities for a given contrast type given the individual values from the tracks passing through each voxel
Options are: sum, min, mean, max (default: mean)
     * @param backtrack if no valid timeseries is found at the streamline endpoint, back-track along the streamline trajectory until a valid timeseries is found
     * @param upsample upsample the tracks by some ratio using Hermite interpolation before mapping (if omitted, an appropriate ratio will be determined automatically)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TckdfcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TCKDFC_METADATA);
    const params = tckdfc_params(tracks, fmri, output, static_, dynamic, template, vox, stat_vox, backtrack, upsample, info, quiet, debug, force, nthreads, config, help, version)
    return tckdfc_execute(params, execution);
}


export {
      TCKDFC_METADATA,
      TckdfcConfigParameters,
      TckdfcDynamicParameters,
      TckdfcOutputs,
      TckdfcParameters,
      tckdfc,
      tckdfc_config_params,
      tckdfc_dynamic_params,
      tckdfc_params,
};
