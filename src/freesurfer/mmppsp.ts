// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MMPPSP_METADATA: Metadata = {
    id: "ed33242168bcb8e40435e7c590174310c28760c1.boutiques",
    name: "mmppsp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MmppspParameters {
    "__STYXTYPE__": "mmppsp";
    "samseg_dir": string;
    "outdir": string;
    "lh_flag": boolean;
    "rh_flag": boolean;
    "likelihood_flag": boolean;
    "posterior_flag": boolean;
    "force_update_flag": boolean;
    "threads"?: number | null | undefined;
    "no_initsphreg_flag": boolean;
    "stop_after"?: string | null | undefined;
    "wexpanddist"?: number | null | undefined;
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
        "mmppsp": mmppsp_cargs,
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
        "mmppsp": mmppsp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mmppsp(...)`.
 *
 * @interface
 */
interface MmppspOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output surface files
     */
    output_surface: OutputPathType;
}


function mmppsp_params(
    samseg_dir: string,
    outdir: string,
    lh_flag: boolean = false,
    rh_flag: boolean = false,
    likelihood_flag: boolean = false,
    posterior_flag: boolean = false,
    force_update_flag: boolean = false,
    threads: number | null = null,
    no_initsphreg_flag: boolean = false,
    stop_after: string | null = null,
    wexpanddist: number | null = null,
): MmppspParameters {
    /**
     * Build parameters.
    
     * @param samseg_dir Directory containing Samseg output
     * @param outdir Output directory for the results
     * @param lh_flag Process left hemisphere
     * @param rh_flag Process right hemisphere
     * @param likelihood_flag Use likelihood for surface placement
     * @param posterior_flag Use posteriors instead of likelihood for surface placement
     * @param force_update_flag Force update the surface placement
     * @param threads Number of threads to use
     * @param no_initsphreg_flag Do not use talairach.lta to initialize rotation
     * @param stop_after Stop the processing after a specified step
     * @param wexpanddist Distance to expand white surface to initialize pial (in mm)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mmppsp" as const,
        "samseg_dir": samseg_dir,
        "outdir": outdir,
        "lh_flag": lh_flag,
        "rh_flag": rh_flag,
        "likelihood_flag": likelihood_flag,
        "posterior_flag": posterior_flag,
        "force_update_flag": force_update_flag,
        "no_initsphreg_flag": no_initsphreg_flag,
    };
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (stop_after !== null) {
        params["stop_after"] = stop_after;
    }
    if (wexpanddist !== null) {
        params["wexpanddist"] = wexpanddist;
    }
    return params;
}


function mmppsp_cargs(
    params: MmppspParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mmppsp");
    cargs.push(
        "--samseg",
        (params["samseg_dir"] ?? null)
    );
    cargs.push(
        "--o",
        (params["outdir"] ?? null)
    );
    if ((params["lh_flag"] ?? null)) {
        cargs.push("--lh");
    }
    if ((params["rh_flag"] ?? null)) {
        cargs.push("--rh");
    }
    if ((params["likelihood_flag"] ?? null)) {
        cargs.push("--likelihood");
    }
    if ((params["posterior_flag"] ?? null)) {
        cargs.push("--posterior");
    }
    if ((params["force_update_flag"] ?? null)) {
        cargs.push("--force-update");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["no_initsphreg_flag"] ?? null)) {
        cargs.push("--no-initsphreg");
    }
    if ((params["stop_after"] ?? null) !== null) {
        cargs.push(
            "--stop-after",
            (params["stop_after"] ?? null)
        );
    }
    if ((params["wexpanddist"] ?? null) !== null) {
        cargs.push(
            "--wexpanddist",
            String((params["wexpanddist"] ?? null))
        );
    }
    return cargs;
}


function mmppsp_outputs(
    params: MmppspParameters,
    execution: Execution,
): MmppspOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MmppspOutputs = {
        root: execution.outputFile("."),
        output_surface: execution.outputFile([(params["outdir"] ?? null), "/surf"].join('')),
    };
    return ret;
}


function mmppsp_execute(
    params: MmppspParameters,
    execution: Execution,
): MmppspOutputs {
    /**
     * MultiModal Posterior Probability Surface Placement.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MmppspOutputs`).
     */
    params = execution.params(params)
    const cargs = mmppsp_cargs(params, execution)
    const ret = mmppsp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mmppsp(
    samseg_dir: string,
    outdir: string,
    lh_flag: boolean = false,
    rh_flag: boolean = false,
    likelihood_flag: boolean = false,
    posterior_flag: boolean = false,
    force_update_flag: boolean = false,
    threads: number | null = null,
    no_initsphreg_flag: boolean = false,
    stop_after: string | null = null,
    wexpanddist: number | null = null,
    runner: Runner | null = null,
): MmppspOutputs {
    /**
     * MultiModal Posterior Probability Surface Placement.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param samseg_dir Directory containing Samseg output
     * @param outdir Output directory for the results
     * @param lh_flag Process left hemisphere
     * @param rh_flag Process right hemisphere
     * @param likelihood_flag Use likelihood for surface placement
     * @param posterior_flag Use posteriors instead of likelihood for surface placement
     * @param force_update_flag Force update the surface placement
     * @param threads Number of threads to use
     * @param no_initsphreg_flag Do not use talairach.lta to initialize rotation
     * @param stop_after Stop the processing after a specified step
     * @param wexpanddist Distance to expand white surface to initialize pial (in mm)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MmppspOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MMPPSP_METADATA);
    const params = mmppsp_params(samseg_dir, outdir, lh_flag, rh_flag, likelihood_flag, posterior_flag, force_update_flag, threads, no_initsphreg_flag, stop_after, wexpanddist)
    return mmppsp_execute(params, execution);
}


export {
      MMPPSP_METADATA,
      MmppspOutputs,
      MmppspParameters,
      mmppsp,
      mmppsp_params,
};
