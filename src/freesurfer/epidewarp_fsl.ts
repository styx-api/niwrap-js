// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EPIDEWARP_FSL_METADATA: Metadata = {
    id: "0b6f576dc06a529efd6bb20065d0ee4307b24409.boutiques",
    name: "epidewarp.fsl",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface EpidewarpFslParameters {
    "__STYXTYPE__": "epidewarp.fsl";
    "mag"?: InputPathType | null | undefined;
    "dph"?: InputPathType | null | undefined;
    "ph"?: InputPathType | null | undefined;
    "complex"?: Array<number> | null | undefined;
    "exf"?: InputPathType | null | undefined;
    "epi"?: InputPathType | null | undefined;
    "tediff"?: number | null | undefined;
    "esp"?: number | null | undefined;
    "perev": boolean;
    "sigma"?: number | null | undefined;
    "vsm_fwhm"?: number | null | undefined;
    "vsm": string;
    "vsmmag"?: string | null | undefined;
    "exfdw"?: string | null | undefined;
    "epidw"?: string | null | undefined;
    "nomagexfreg": boolean;
    "head": boolean;
    "tmpdir"?: string | null | undefined;
    "log"?: string | null | undefined;
    "nocleanup": boolean;
    "cleanup": boolean;
    "debug": boolean;
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
        "epidewarp.fsl": epidewarp_fsl_cargs,
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
        "epidewarp.fsl": epidewarp_fsl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `epidewarp_fsl(...)`.
 *
 * @interface
 */
interface EpidewarpFslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Voxel Shift Map output
     */
    vsm_output: OutputPathType;
    /**
     * Dewarped example func volume
     */
    exfdw_output: OutputPathType | null;
    /**
     * Dewarped EPI volume
     */
    epidw_output: OutputPathType | null;
    /**
     * Voxel shift map in mag space output
     */
    vsmmag_output: OutputPathType | null;
}


function epidewarp_fsl_params(
    vsm: string,
    mag: InputPathType | null = null,
    dph: InputPathType | null = null,
    ph: InputPathType | null = null,
    complex: Array<number> | null = null,
    exf: InputPathType | null = null,
    epi: InputPathType | null = null,
    tediff: number | null = null,
    esp: number | null = null,
    perev: boolean = false,
    sigma: number | null = null,
    vsm_fwhm: number | null = null,
    vsmmag: string | null = null,
    exfdw: string | null = null,
    epidw: string | null = null,
    nomagexfreg: boolean = false,
    head: boolean = false,
    tmpdir: string | null = null,
    log: string | null = null,
    nocleanup: boolean = false,
    cleanup: boolean = false,
    debug: boolean = false,
): EpidewarpFslParameters {
    /**
     * Build parameters.
    
     * @param vsm Voxel shift map (required)
     * @param mag B0 magnitude volume
     * @param dph B0 phase difference volume
     * @param ph B0 phase volume
     * @param complex B0 map in complex values: real1 imag1 real2 imag2
     * @param exf Example func volume
     * @param epi EPI volume to unwarp
     * @param tediff Difference in B0 field map TEs
     * @param esp EPI echo spacing
     * @param perev Assume reversed phase encode direction
     * @param sigma 2D spatial gaussian smoothing stddev (default 2mm)
     * @param vsm_fwhm Allows VSM to be extended outside of the mask
     * @param vsmmag Voxel shift map in mag space
     * @param exfdw Dewarped example func volume
     * @param epidw Dewarped EPI volume
     * @param nomagexfreg Assume mag and exf are in register
     * @param head Mask to head instead of brain
     * @param tmpdir Save intermediate results here
     * @param log Use logfile instead of default
     * @param nocleanup Do not delete tmpdir
     * @param cleanup Force deletion of tmpdir
     * @param debug Prints copious amounts to the screen
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "epidewarp.fsl" as const,
        "perev": perev,
        "vsm": vsm,
        "nomagexfreg": nomagexfreg,
        "head": head,
        "nocleanup": nocleanup,
        "cleanup": cleanup,
        "debug": debug,
    };
    if (mag !== null) {
        params["mag"] = mag;
    }
    if (dph !== null) {
        params["dph"] = dph;
    }
    if (ph !== null) {
        params["ph"] = ph;
    }
    if (complex !== null) {
        params["complex"] = complex;
    }
    if (exf !== null) {
        params["exf"] = exf;
    }
    if (epi !== null) {
        params["epi"] = epi;
    }
    if (tediff !== null) {
        params["tediff"] = tediff;
    }
    if (esp !== null) {
        params["esp"] = esp;
    }
    if (sigma !== null) {
        params["sigma"] = sigma;
    }
    if (vsm_fwhm !== null) {
        params["vsm_fwhm"] = vsm_fwhm;
    }
    if (vsmmag !== null) {
        params["vsmmag"] = vsmmag;
    }
    if (exfdw !== null) {
        params["exfdw"] = exfdw;
    }
    if (epidw !== null) {
        params["epidw"] = epidw;
    }
    if (tmpdir !== null) {
        params["tmpdir"] = tmpdir;
    }
    if (log !== null) {
        params["log"] = log;
    }
    return params;
}


function epidewarp_fsl_cargs(
    params: EpidewarpFslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("epidewarp.fsl");
    if ((params["mag"] ?? null) !== null) {
        cargs.push(
            "--mag",
            execution.inputFile((params["mag"] ?? null))
        );
    }
    if ((params["dph"] ?? null) !== null) {
        cargs.push(
            "--dph",
            execution.inputFile((params["dph"] ?? null))
        );
    }
    if ((params["ph"] ?? null) !== null) {
        cargs.push(
            "--ph",
            execution.inputFile((params["ph"] ?? null))
        );
    }
    if ((params["complex"] ?? null) !== null) {
        cargs.push(
            "--complex",
            ...(params["complex"] ?? null).map(String)
        );
    }
    if ((params["exf"] ?? null) !== null) {
        cargs.push(
            "--exf",
            execution.inputFile((params["exf"] ?? null))
        );
    }
    if ((params["epi"] ?? null) !== null) {
        cargs.push(
            "--epi",
            execution.inputFile((params["epi"] ?? null))
        );
    }
    if ((params["tediff"] ?? null) !== null) {
        cargs.push(
            "--tediff",
            String((params["tediff"] ?? null))
        );
    }
    if ((params["esp"] ?? null) !== null) {
        cargs.push(
            "--esp",
            String((params["esp"] ?? null))
        );
    }
    if ((params["perev"] ?? null)) {
        cargs.push("--perev");
    }
    if ((params["sigma"] ?? null) !== null) {
        cargs.push(
            "--sigma",
            String((params["sigma"] ?? null))
        );
    }
    if ((params["vsm_fwhm"] ?? null) !== null) {
        cargs.push(
            "--vsm-fwhm",
            String((params["vsm_fwhm"] ?? null))
        );
    }
    cargs.push(
        "--vsm",
        (params["vsm"] ?? null)
    );
    if ((params["vsmmag"] ?? null) !== null) {
        cargs.push(
            "--vsmmag",
            (params["vsmmag"] ?? null)
        );
    }
    if ((params["exfdw"] ?? null) !== null) {
        cargs.push(
            "--exfdw",
            (params["exfdw"] ?? null)
        );
    }
    if ((params["epidw"] ?? null) !== null) {
        cargs.push(
            "--epidw",
            (params["epidw"] ?? null)
        );
    }
    if ((params["nomagexfreg"] ?? null)) {
        cargs.push("--nomagexfreg");
    }
    if ((params["head"] ?? null)) {
        cargs.push("--head");
    }
    if ((params["tmpdir"] ?? null) !== null) {
        cargs.push(
            "--tmpdir",
            (params["tmpdir"] ?? null)
        );
    }
    if ((params["log"] ?? null) !== null) {
        cargs.push(
            "--log",
            (params["log"] ?? null)
        );
    }
    if ((params["nocleanup"] ?? null)) {
        cargs.push("--nocleanup");
    }
    if ((params["cleanup"] ?? null)) {
        cargs.push("--cleanup");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function epidewarp_fsl_outputs(
    params: EpidewarpFslParameters,
    execution: Execution,
): EpidewarpFslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: EpidewarpFslOutputs = {
        root: execution.outputFile("."),
        vsm_output: execution.outputFile([(params["vsm"] ?? null), ".nii.gz"].join('')),
        exfdw_output: ((params["exfdw"] ?? null) !== null) ? execution.outputFile([(params["exfdw"] ?? null), ".nii.gz"].join('')) : null,
        epidw_output: ((params["epidw"] ?? null) !== null) ? execution.outputFile([(params["epidw"] ?? null), ".nii.gz"].join('')) : null,
        vsmmag_output: ((params["vsmmag"] ?? null) !== null) ? execution.outputFile([(params["vsmmag"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function epidewarp_fsl_execute(
    params: EpidewarpFslParameters,
    execution: Execution,
): EpidewarpFslOutputs {
    /**
     * Front end for FSL's PRELUDE and FUGUE programs to correct B0 distortion in EPI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `EpidewarpFslOutputs`).
     */
    params = execution.params(params)
    const cargs = epidewarp_fsl_cargs(params, execution)
    const ret = epidewarp_fsl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function epidewarp_fsl(
    vsm: string,
    mag: InputPathType | null = null,
    dph: InputPathType | null = null,
    ph: InputPathType | null = null,
    complex: Array<number> | null = null,
    exf: InputPathType | null = null,
    epi: InputPathType | null = null,
    tediff: number | null = null,
    esp: number | null = null,
    perev: boolean = false,
    sigma: number | null = null,
    vsm_fwhm: number | null = null,
    vsmmag: string | null = null,
    exfdw: string | null = null,
    epidw: string | null = null,
    nomagexfreg: boolean = false,
    head: boolean = false,
    tmpdir: string | null = null,
    log: string | null = null,
    nocleanup: boolean = false,
    cleanup: boolean = false,
    debug: boolean = false,
    runner: Runner | null = null,
): EpidewarpFslOutputs {
    /**
     * Front end for FSL's PRELUDE and FUGUE programs to correct B0 distortion in EPI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param vsm Voxel shift map (required)
     * @param mag B0 magnitude volume
     * @param dph B0 phase difference volume
     * @param ph B0 phase volume
     * @param complex B0 map in complex values: real1 imag1 real2 imag2
     * @param exf Example func volume
     * @param epi EPI volume to unwarp
     * @param tediff Difference in B0 field map TEs
     * @param esp EPI echo spacing
     * @param perev Assume reversed phase encode direction
     * @param sigma 2D spatial gaussian smoothing stddev (default 2mm)
     * @param vsm_fwhm Allows VSM to be extended outside of the mask
     * @param vsmmag Voxel shift map in mag space
     * @param exfdw Dewarped example func volume
     * @param epidw Dewarped EPI volume
     * @param nomagexfreg Assume mag and exf are in register
     * @param head Mask to head instead of brain
     * @param tmpdir Save intermediate results here
     * @param log Use logfile instead of default
     * @param nocleanup Do not delete tmpdir
     * @param cleanup Force deletion of tmpdir
     * @param debug Prints copious amounts to the screen
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `EpidewarpFslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EPIDEWARP_FSL_METADATA);
    const params = epidewarp_fsl_params(vsm, mag, dph, ph, complex, exf, epi, tediff, esp, perev, sigma, vsm_fwhm, vsmmag, exfdw, epidw, nomagexfreg, head, tmpdir, log, nocleanup, cleanup, debug)
    return epidewarp_fsl_execute(params, execution);
}


export {
      EPIDEWARP_FSL_METADATA,
      EpidewarpFslOutputs,
      EpidewarpFslParameters,
      epidewarp_fsl,
      epidewarp_fsl_params,
};
