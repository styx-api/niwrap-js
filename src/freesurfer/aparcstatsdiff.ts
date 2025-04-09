// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const APARCSTATSDIFF_METADATA: Metadata = {
    id: "4a3d5285bb31b350d627388c14efaeed5f882361.boutiques",
    name: "aparcstatsdiff",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface AparcstatsdiffParameters {
    "__STYXTYPE__": "aparcstatsdiff";
    "subj1": string;
    "subj2": string;
    "hemi": string;
    "parc": string;
    "meas": string;
    "outdir"?: string | null | undefined;
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
        "aparcstatsdiff": aparcstatsdiff_cargs,
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
        "aparcstatsdiff": aparcstatsdiff_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `aparcstatsdiff(...)`.
 *
 * @interface
 */
interface AparcstatsdiffOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output table with percentage differences
     */
    output_file: OutputPathType;
}


function aparcstatsdiff_params(
    subj1: string,
    subj2: string,
    hemi: string,
    parc: string,
    meas: string,
    outdir: string | null = null,
): AparcstatsdiffParameters {
    /**
     * Build parameters.
    
     * @param subj1 Subject 1 identifier
     * @param subj2 Subject 2 identifier
     * @param hemi Hemisphere (rh or lh)
     * @param parc Parcellation scheme (aparc or aparc.a2009s)
     * @param meas Measure type (area, volume, or thickness)
     * @param outdir Directory to write the output table file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "aparcstatsdiff" as const,
        "subj1": subj1,
        "subj2": subj2,
        "hemi": hemi,
        "parc": parc,
        "meas": meas,
    };
    if (outdir !== null) {
        params["outdir"] = outdir;
    }
    return params;
}


function aparcstatsdiff_cargs(
    params: AparcstatsdiffParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("aparcstatsdiff");
    cargs.push((params["subj1"] ?? null));
    cargs.push((params["subj2"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["parc"] ?? null));
    cargs.push((params["meas"] ?? null));
    if ((params["outdir"] ?? null) !== null) {
        cargs.push((params["outdir"] ?? null));
    }
    return cargs;
}


function aparcstatsdiff_outputs(
    params: AparcstatsdiffParameters,
    execution: Execution,
): AparcstatsdiffOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AparcstatsdiffOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["aparcstats-", (params["hemi"] ?? null), ".", (params["parc"] ?? null), ".", (params["meas"] ?? null), ".txt"].join('')),
    };
    return ret;
}


function aparcstatsdiff_execute(
    params: AparcstatsdiffParameters,
    execution: Execution,
): AparcstatsdiffOutputs {
    /**
     * Utility to calculate percentage differences in aparc morphometry data between two subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AparcstatsdiffOutputs`).
     */
    params = execution.params(params)
    const cargs = aparcstatsdiff_cargs(params, execution)
    const ret = aparcstatsdiff_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function aparcstatsdiff(
    subj1: string,
    subj2: string,
    hemi: string,
    parc: string,
    meas: string,
    outdir: string | null = null,
    runner: Runner | null = null,
): AparcstatsdiffOutputs {
    /**
     * Utility to calculate percentage differences in aparc morphometry data between two subjects.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subj1 Subject 1 identifier
     * @param subj2 Subject 2 identifier
     * @param hemi Hemisphere (rh or lh)
     * @param parc Parcellation scheme (aparc or aparc.a2009s)
     * @param meas Measure type (area, volume, or thickness)
     * @param outdir Directory to write the output table file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AparcstatsdiffOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(APARCSTATSDIFF_METADATA);
    const params = aparcstatsdiff_params(subj1, subj2, hemi, parc, meas, outdir)
    return aparcstatsdiff_execute(params, execution);
}


export {
      APARCSTATSDIFF_METADATA,
      AparcstatsdiffOutputs,
      AparcstatsdiffParameters,
      aparcstatsdiff,
      aparcstatsdiff_params,
};
