// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_SURFCLUSTER_METADATA: Metadata = {
    id: "a70520f8f1d486263670ae25cac56adca853556b.boutiques",
    name: "mri_surfcluster",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriSurfclusterParameters {
    "__STYXTYPE__": "mri_surfcluster";
    "infile": InputPathType;
    "thmin"?: number | null | undefined;
    "sign"?: string | null | undefined;
    "no_adjust_flag": boolean;
    "fdr"?: number | null | undefined;
    "subject"?: string | null | undefined;
    "hemi"?: string | null | undefined;
    "surf"?: string | null | undefined;
    "surfpath"?: string | null | undefined;
    "annot"?: string | null | undefined;
    "frame"?: number | null | undefined;
    "csd"?: Array<InputPathType> | null | undefined;
    "vwsig"?: string | null | undefined;
    "cwsig"?: string | null | undefined;
    "maxcwpval"?: string | null | undefined;
    "bonferroni"?: number | null | undefined;
    "sig2p_max_flag": boolean;
    "bonferroni_max"?: number | null | undefined;
    "csdpdf"?: string | null | undefined;
    "csdpdf_only_flag": boolean;
    "csd_out"?: InputPathType | null | undefined;
    "cwpvalthresh"?: number | null | undefined;
    "fwhm"?: number | null | undefined;
    "fwhmdat"?: string | null | undefined;
    "clabel"?: InputPathType | null | undefined;
    "cortex_flag": boolean;
    "mask"?: InputPathType | null | undefined;
    "mask_inv_flag": boolean;
    "centroid_flag": boolean;
    "sum"?: InputPathType | null | undefined;
    "pointset"?: InputPathType | null | undefined;
    "maxareafile"?: string | null | undefined;
    "o"?: string | null | undefined;
    "ocn"?: string | null | undefined;
    "olab"?: string | null | undefined;
    "oannot"?: string | null | undefined;
    "minarea"?: number | null | undefined;
    "xfm"?: InputPathType | null | undefined;
    "no_fixmni_flag": boolean;
    "sd"?: string | null | undefined;
    "thmax"?: number | null | undefined;
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
        "mri_surfcluster": mri_surfcluster_cargs,
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
        "mri_surfcluster": mri_surfcluster_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_surfcluster(...)`.
 *
 * @interface
 */
interface MriSurfclusterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Filtered surface file with non-cluster vertices set to 0
     */
    output_surface_file: OutputPathType | null;
    /**
     * Surface file with cluster number per vertex
     */
    output_cluster_number_file: OutputPathType | null;
    /**
     * Label files for clusters
     */
    output_labels: OutputPathType | null;
    /**
     * Text summary file of clustering results
     */
    output_summary_file: OutputPathType | null;
    /**
     * Pointset file for visualization in Freeview
     */
    output_pointset_file: OutputPathType | null;
    /**
     * File containing the area of the largest cluster
     */
    output_max_area_file: OutputPathType | null;
}


function mri_surfcluster_params(
    infile: InputPathType,
    thmin: number | null = null,
    sign: string | null = null,
    no_adjust_flag: boolean = false,
    fdr: number | null = null,
    subject: string | null = null,
    hemi: string | null = null,
    surf: string | null = null,
    surfpath: string | null = null,
    annot: string | null = null,
    frame: number | null = null,
    csd: Array<InputPathType> | null = null,
    vwsig: string | null = null,
    cwsig: string | null = null,
    maxcwpval: string | null = null,
    bonferroni: number | null = null,
    sig2p_max_flag: boolean = false,
    bonferroni_max: number | null = null,
    csdpdf: string | null = null,
    csdpdf_only_flag: boolean = false,
    csd_out: InputPathType | null = null,
    cwpvalthresh: number | null = null,
    fwhm: number | null = null,
    fwhmdat: string | null = null,
    clabel: InputPathType | null = null,
    cortex_flag: boolean = false,
    mask: InputPathType | null = null,
    mask_inv_flag: boolean = false,
    centroid_flag: boolean = false,
    sum: InputPathType | null = null,
    pointset: InputPathType | null = null,
    maxareafile: string | null = null,
    o: string | null = null,
    ocn: string | null = null,
    olab: string | null = null,
    oannot: string | null = null,
    minarea: number | null = null,
    xfm: InputPathType | null = null,
    no_fixmni_flag: boolean = false,
    sd: string | null = null,
    thmax: number | null = null,
): MriSurfclusterParameters {
    /**
     * Build parameters.
    
     * @param infile Source of surface values
     * @param thmin Minimum intensity threshold
     * @param sign Sign of threshold criteria (abs, pos, neg)
     * @param no_adjust_flag Do not adjust threshold for one-tailed tests
     * @param fdr Set thmin with False Discovery Rate
     * @param subject Source surface subject (can be ico)
     * @param hemi Cortical hemisphere, either lh or rh
     * @param surf Coordinates from surface (e.g., white)
     * @param surfpath Full path to surface
     * @param annot Report annotation for max vertex (e.g., aparc)
     * @param frame 0-based frame number of the input file
     * @param csd Load one or more CSD files
     * @param vwsig Map of corrected voxel-wise significances
     * @param cwsig Map of cluster-wise significances
     * @param maxcwpval Save p-value of the largest (max) cluster
     * @param bonferroni Apply Bonferroni correction across N spaces
     * @param sig2p_max_flag Convert max from sig to p
     * @param bonferroni_max Apply Bonferroni correction to maximum
     * @param csdpdf Compute PDF/CDF of CSD data and save
     * @param csdpdf_only_flag Only write the CSD PDF file
     * @param csd_out Write out merged CSD files as one
     * @param cwpvalthresh Cluster-wise threshold
     * @param fwhm FWHM in mm^2 for GRF
     * @param fwhmdat Text file with FWHM in mm^2 for GRF
     * @param clabel Constrain cluster search to be inside or outside clabel
     * @param cortex_flag Set clabel to be subject/label/hemi.cortex.label
     * @param mask Constrain to be within mask
     * @param mask_inv_flag Constrain cluster search to be outside mask or clabel
     * @param centroid_flag Report centroid instead of location of maximum stat
     * @param sum Text file to store cluster summary
     * @param pointset File that can be read into Freeview with -c
     * @param maxareafile Write area of largest cluster to this file
     * @param o Output file with non-clusters set to 0
     * @param ocn Output file where value is cluster number
     * @param olab Output clusters as labels
     * @param oannot Output clusters as an annotation
     * @param minarea Area threshold for a cluster (mm^2)
     * @param xfm Talairach transform file
     * @param no_fixmni_flag Do not fix MNI Talairach coordinates
     * @param sd FreeSurfer subjects directory
     * @param thmax Maximum intensity threshold
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_surfcluster" as const,
        "infile": infile,
        "no_adjust_flag": no_adjust_flag,
        "sig2p_max_flag": sig2p_max_flag,
        "csdpdf_only_flag": csdpdf_only_flag,
        "cortex_flag": cortex_flag,
        "mask_inv_flag": mask_inv_flag,
        "centroid_flag": centroid_flag,
        "no_fixmni_flag": no_fixmni_flag,
    };
    if (thmin !== null) {
        params["thmin"] = thmin;
    }
    if (sign !== null) {
        params["sign"] = sign;
    }
    if (fdr !== null) {
        params["fdr"] = fdr;
    }
    if (subject !== null) {
        params["subject"] = subject;
    }
    if (hemi !== null) {
        params["hemi"] = hemi;
    }
    if (surf !== null) {
        params["surf"] = surf;
    }
    if (surfpath !== null) {
        params["surfpath"] = surfpath;
    }
    if (annot !== null) {
        params["annot"] = annot;
    }
    if (frame !== null) {
        params["frame"] = frame;
    }
    if (csd !== null) {
        params["csd"] = csd;
    }
    if (vwsig !== null) {
        params["vwsig"] = vwsig;
    }
    if (cwsig !== null) {
        params["cwsig"] = cwsig;
    }
    if (maxcwpval !== null) {
        params["maxcwpval"] = maxcwpval;
    }
    if (bonferroni !== null) {
        params["bonferroni"] = bonferroni;
    }
    if (bonferroni_max !== null) {
        params["bonferroni_max"] = bonferroni_max;
    }
    if (csdpdf !== null) {
        params["csdpdf"] = csdpdf;
    }
    if (csd_out !== null) {
        params["csd_out"] = csd_out;
    }
    if (cwpvalthresh !== null) {
        params["cwpvalthresh"] = cwpvalthresh;
    }
    if (fwhm !== null) {
        params["fwhm"] = fwhm;
    }
    if (fwhmdat !== null) {
        params["fwhmdat"] = fwhmdat;
    }
    if (clabel !== null) {
        params["clabel"] = clabel;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (sum !== null) {
        params["sum"] = sum;
    }
    if (pointset !== null) {
        params["pointset"] = pointset;
    }
    if (maxareafile !== null) {
        params["maxareafile"] = maxareafile;
    }
    if (o !== null) {
        params["o"] = o;
    }
    if (ocn !== null) {
        params["ocn"] = ocn;
    }
    if (olab !== null) {
        params["olab"] = olab;
    }
    if (oannot !== null) {
        params["oannot"] = oannot;
    }
    if (minarea !== null) {
        params["minarea"] = minarea;
    }
    if (xfm !== null) {
        params["xfm"] = xfm;
    }
    if (sd !== null) {
        params["sd"] = sd;
    }
    if (thmax !== null) {
        params["thmax"] = thmax;
    }
    return params;
}


function mri_surfcluster_cargs(
    params: MriSurfclusterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_surfcluster");
    cargs.push(
        "--in",
        execution.inputFile((params["infile"] ?? null))
    );
    if ((params["thmin"] ?? null) !== null) {
        cargs.push(
            "--thmin",
            String((params["thmin"] ?? null))
        );
    }
    if ((params["sign"] ?? null) !== null) {
        cargs.push(
            "--sign",
            (params["sign"] ?? null)
        );
    }
    if ((params["no_adjust_flag"] ?? null)) {
        cargs.push("--no-adjust");
    }
    if ((params["fdr"] ?? null) !== null) {
        cargs.push(
            "--fdr",
            String((params["fdr"] ?? null))
        );
    }
    if ((params["subject"] ?? null) !== null) {
        cargs.push(
            "--subject",
            (params["subject"] ?? null)
        );
    }
    if ((params["hemi"] ?? null) !== null) {
        cargs.push(
            "--hemi",
            (params["hemi"] ?? null)
        );
    }
    if ((params["surf"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf"] ?? null)
        );
    }
    if ((params["surfpath"] ?? null) !== null) {
        cargs.push(
            "--surfpath",
            (params["surfpath"] ?? null)
        );
    }
    if ((params["annot"] ?? null) !== null) {
        cargs.push(
            "--annot",
            (params["annot"] ?? null)
        );
    }
    if ((params["frame"] ?? null) !== null) {
        cargs.push(
            "--frame",
            String((params["frame"] ?? null))
        );
    }
    if ((params["csd"] ?? null) !== null) {
        cargs.push(
            "--csd",
            ...(params["csd"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["vwsig"] ?? null) !== null) {
        cargs.push(
            "--vwsig",
            (params["vwsig"] ?? null)
        );
    }
    if ((params["cwsig"] ?? null) !== null) {
        cargs.push(
            "--cwsig",
            (params["cwsig"] ?? null)
        );
    }
    if ((params["maxcwpval"] ?? null) !== null) {
        cargs.push(
            "--maxcwpval",
            (params["maxcwpval"] ?? null)
        );
    }
    if ((params["bonferroni"] ?? null) !== null) {
        cargs.push(
            "--bonferroni",
            String((params["bonferroni"] ?? null))
        );
    }
    if ((params["sig2p_max_flag"] ?? null)) {
        cargs.push("--sig2p-max");
    }
    if ((params["bonferroni_max"] ?? null) !== null) {
        cargs.push(
            "--bonferroni-max",
            String((params["bonferroni_max"] ?? null))
        );
    }
    if ((params["csdpdf"] ?? null) !== null) {
        cargs.push(
            "--csdpdf",
            (params["csdpdf"] ?? null)
        );
    }
    if ((params["csdpdf_only_flag"] ?? null)) {
        cargs.push("--csdpdf-only");
    }
    if ((params["csd_out"] ?? null) !== null) {
        cargs.push(
            "--csd-out",
            execution.inputFile((params["csd_out"] ?? null))
        );
    }
    if ((params["cwpvalthresh"] ?? null) !== null) {
        cargs.push(
            "--cwpvalthresh",
            String((params["cwpvalthresh"] ?? null))
        );
    }
    if ((params["fwhm"] ?? null) !== null) {
        cargs.push(
            "--fwhm",
            String((params["fwhm"] ?? null))
        );
    }
    if ((params["fwhmdat"] ?? null) !== null) {
        cargs.push(
            "--fwhmdat",
            (params["fwhmdat"] ?? null)
        );
    }
    if ((params["clabel"] ?? null) !== null) {
        cargs.push(
            "--clabel",
            execution.inputFile((params["clabel"] ?? null))
        );
    }
    if ((params["cortex_flag"] ?? null)) {
        cargs.push("--cortex");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["mask_inv_flag"] ?? null)) {
        cargs.push("--mask-inv");
    }
    if ((params["centroid_flag"] ?? null)) {
        cargs.push("--centroid");
    }
    if ((params["sum"] ?? null) !== null) {
        cargs.push(
            "--sum",
            execution.inputFile((params["sum"] ?? null))
        );
    }
    if ((params["pointset"] ?? null) !== null) {
        cargs.push(
            "--pointset",
            execution.inputFile((params["pointset"] ?? null))
        );
    }
    if ((params["maxareafile"] ?? null) !== null) {
        cargs.push(
            "--maxareafile",
            (params["maxareafile"] ?? null)
        );
    }
    if ((params["o"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["o"] ?? null)
        );
    }
    if ((params["ocn"] ?? null) !== null) {
        cargs.push(
            "--ocn",
            (params["ocn"] ?? null)
        );
    }
    if ((params["olab"] ?? null) !== null) {
        cargs.push(
            "--olab",
            (params["olab"] ?? null)
        );
    }
    if ((params["oannot"] ?? null) !== null) {
        cargs.push(
            "--oannot",
            (params["oannot"] ?? null)
        );
    }
    if ((params["minarea"] ?? null) !== null) {
        cargs.push(
            "--minarea",
            String((params["minarea"] ?? null))
        );
    }
    if ((params["xfm"] ?? null) !== null) {
        cargs.push(
            "--xfm",
            execution.inputFile((params["xfm"] ?? null))
        );
    }
    if ((params["no_fixmni_flag"] ?? null)) {
        cargs.push("--nofixmni");
    }
    if ((params["sd"] ?? null) !== null) {
        cargs.push(
            "--sd",
            (params["sd"] ?? null)
        );
    }
    if ((params["thmax"] ?? null) !== null) {
        cargs.push(
            "--thmax",
            String((params["thmax"] ?? null))
        );
    }
    return cargs;
}


function mri_surfcluster_outputs(
    params: MriSurfclusterParameters,
    execution: Execution,
): MriSurfclusterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriSurfclusterOutputs = {
        root: execution.outputFile("."),
        output_surface_file: ((params["o"] ?? null) !== null) ? execution.outputFile([(params["o"] ?? null)].join('')) : null,
        output_cluster_number_file: ((params["ocn"] ?? null) !== null) ? execution.outputFile([(params["ocn"] ?? null)].join('')) : null,
        output_labels: ((params["olab"] ?? null) !== null) ? execution.outputFile([(params["olab"] ?? null), "-*.label"].join('')) : null,
        output_summary_file: ((params["sum"] ?? null) !== null) ? execution.outputFile([path.basename((params["sum"] ?? null))].join('')) : null,
        output_pointset_file: ((params["pointset"] ?? null) !== null) ? execution.outputFile([path.basename((params["pointset"] ?? null))].join('')) : null,
        output_max_area_file: ((params["maxareafile"] ?? null) !== null) ? execution.outputFile([(params["maxareafile"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_surfcluster_execute(
    params: MriSurfclusterParameters,
    execution: Execution,
): MriSurfclusterOutputs {
    /**
     * A tool for clustering vertices on a cortical surface based on intensity values.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriSurfclusterOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_surfcluster_cargs(params, execution)
    const ret = mri_surfcluster_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_surfcluster(
    infile: InputPathType,
    thmin: number | null = null,
    sign: string | null = null,
    no_adjust_flag: boolean = false,
    fdr: number | null = null,
    subject: string | null = null,
    hemi: string | null = null,
    surf: string | null = null,
    surfpath: string | null = null,
    annot: string | null = null,
    frame: number | null = null,
    csd: Array<InputPathType> | null = null,
    vwsig: string | null = null,
    cwsig: string | null = null,
    maxcwpval: string | null = null,
    bonferroni: number | null = null,
    sig2p_max_flag: boolean = false,
    bonferroni_max: number | null = null,
    csdpdf: string | null = null,
    csdpdf_only_flag: boolean = false,
    csd_out: InputPathType | null = null,
    cwpvalthresh: number | null = null,
    fwhm: number | null = null,
    fwhmdat: string | null = null,
    clabel: InputPathType | null = null,
    cortex_flag: boolean = false,
    mask: InputPathType | null = null,
    mask_inv_flag: boolean = false,
    centroid_flag: boolean = false,
    sum: InputPathType | null = null,
    pointset: InputPathType | null = null,
    maxareafile: string | null = null,
    o: string | null = null,
    ocn: string | null = null,
    olab: string | null = null,
    oannot: string | null = null,
    minarea: number | null = null,
    xfm: InputPathType | null = null,
    no_fixmni_flag: boolean = false,
    sd: string | null = null,
    thmax: number | null = null,
    runner: Runner | null = null,
): MriSurfclusterOutputs {
    /**
     * A tool for clustering vertices on a cortical surface based on intensity values.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param infile Source of surface values
     * @param thmin Minimum intensity threshold
     * @param sign Sign of threshold criteria (abs, pos, neg)
     * @param no_adjust_flag Do not adjust threshold for one-tailed tests
     * @param fdr Set thmin with False Discovery Rate
     * @param subject Source surface subject (can be ico)
     * @param hemi Cortical hemisphere, either lh or rh
     * @param surf Coordinates from surface (e.g., white)
     * @param surfpath Full path to surface
     * @param annot Report annotation for max vertex (e.g., aparc)
     * @param frame 0-based frame number of the input file
     * @param csd Load one or more CSD files
     * @param vwsig Map of corrected voxel-wise significances
     * @param cwsig Map of cluster-wise significances
     * @param maxcwpval Save p-value of the largest (max) cluster
     * @param bonferroni Apply Bonferroni correction across N spaces
     * @param sig2p_max_flag Convert max from sig to p
     * @param bonferroni_max Apply Bonferroni correction to maximum
     * @param csdpdf Compute PDF/CDF of CSD data and save
     * @param csdpdf_only_flag Only write the CSD PDF file
     * @param csd_out Write out merged CSD files as one
     * @param cwpvalthresh Cluster-wise threshold
     * @param fwhm FWHM in mm^2 for GRF
     * @param fwhmdat Text file with FWHM in mm^2 for GRF
     * @param clabel Constrain cluster search to be inside or outside clabel
     * @param cortex_flag Set clabel to be subject/label/hemi.cortex.label
     * @param mask Constrain to be within mask
     * @param mask_inv_flag Constrain cluster search to be outside mask or clabel
     * @param centroid_flag Report centroid instead of location of maximum stat
     * @param sum Text file to store cluster summary
     * @param pointset File that can be read into Freeview with -c
     * @param maxareafile Write area of largest cluster to this file
     * @param o Output file with non-clusters set to 0
     * @param ocn Output file where value is cluster number
     * @param olab Output clusters as labels
     * @param oannot Output clusters as an annotation
     * @param minarea Area threshold for a cluster (mm^2)
     * @param xfm Talairach transform file
     * @param no_fixmni_flag Do not fix MNI Talairach coordinates
     * @param sd FreeSurfer subjects directory
     * @param thmax Maximum intensity threshold
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriSurfclusterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_SURFCLUSTER_METADATA);
    const params = mri_surfcluster_params(infile, thmin, sign, no_adjust_flag, fdr, subject, hemi, surf, surfpath, annot, frame, csd, vwsig, cwsig, maxcwpval, bonferroni, sig2p_max_flag, bonferroni_max, csdpdf, csdpdf_only_flag, csd_out, cwpvalthresh, fwhm, fwhmdat, clabel, cortex_flag, mask, mask_inv_flag, centroid_flag, sum, pointset, maxareafile, o, ocn, olab, oannot, minarea, xfm, no_fixmni_flag, sd, thmax)
    return mri_surfcluster_execute(params, execution);
}


export {
      MRI_SURFCLUSTER_METADATA,
      MriSurfclusterOutputs,
      MriSurfclusterParameters,
      mri_surfcluster,
      mri_surfcluster_params,
};
